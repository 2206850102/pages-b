<template>
  <var-space direction="column">
    <var-select placeholder="选择语言" v-model="data.lang" @change="data.voice = 0" v-ripple>
      <var-option v-for="lang in internal.langList" :key="lang" :label="lang" />
    </var-select>
    <var-select placeholder="选择声音" v-model="data.voice" v-ripple>
      <var-option v-for="(voice, i) in internal.voiceLists[data.lang]" :key="i" :label="voice.ShortName" :value="i" />
    </var-select>
    <div class="input-number-wrap">
      <span class="input-number-label">音调</span>
      <var-counter v-model="data.pitch" :step="10" />
    </div>
    <div class="input-number-wrap">
      <span class="input-number-label">语速</span>
      <var-counter v-model="data.rate" :step="10" />
    </div>
    <div class="input-number-wrap">
      <span class="input-number-label">音量</span>
      <var-counter v-model="data.volume" :step="10" />
    </div>
    <var-input placeholder="输入内容" v-model="data.text" />
    <var-space>
      <var-button @click="speak" type="primary" :loading="internal.speaking" loading-type="rect">播放</var-button>
      <var-button @click="download" :loading="internal.downloading" loading-type="rect">下载</var-button>
    </var-space>
  </var-space>
  <var-skeleton fullscreen :loading="internal.loading" />
</template>

<script setup>
  import { reactive } from 'vue'
  import { Snackbar } from '@varlet/ui'
  import '@varlet/ui/es/snackbar/style/index.js'

  const textEncoder = new TextEncoder()
  const binaryHeadEnd = textEncoder.encode('Path:audio\r\n').toString()

  const internal = reactive({
    loading: true,
    langList: [],
    voiceLists: {},
    speaking: false,
    downloading: false
  })

  const data = reactive({
    lang: 'zh-CN',
    voice: 0,
    pitch: 0,
    rate: 0,
    volume: 0,
    text: '请输入要进行测试的内容'
  })

  // 获取声音列表
  function fetchVoiceList() {
    internal.loading = true
    const _voiceLists = {}
    const _langList = []
    fetch(
      'https://speech.platform.bing.com/consumer/speech/synthesize/readaloud/voices/list?trustedclienttoken=6A5AA1D4EAFF4E9FB37E23D68491D6F4'
    )
      .then((data) => data.json())
      .then((data) => {
        data.forEach((item) => {
          if (!_voiceLists[item.Locale]) {
            _langList.push(item.Locale)
            _voiceLists[item.Locale] = []
          }
          _voiceLists[item.Locale].push(item)
        })
        internal.langList = _langList.sort()
        internal.voiceLists = _voiceLists
        internal.loading = false
      })
  }

  // 生成guid
  function guid(count = 8) {
    let out = ''
    for (let i = 0; i < count; i++) {
      out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    return out
  }

  // 数字转带符号字符串
  function numToString(num) {
    return num >= 0 ? `+${num}` : `${num}`
  }

  const speechConfig = (audioOutputFormat = 'webm-24khz-16bit-mono-opus') =>
    `X-Timestamp:${new Date()}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"${audioOutputFormat}"}}}}`

  const ssmlText = ({
    requestId = guid(),
    lang = 'zh-CN',
    voiceName,
    pitch = '+0',
    rate = '+0',
    volume = '+0',
    text
  }) =>
    `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${new Date()}\r\nPath:ssml\r\n\r\n<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xmlns:mstts='https://www.w3.org/2001/mstts' xml:lang='${lang}'><voice name='${voiceName}'><prosody pitch='${pitch}Hz' rate ='${rate}%' volume='${volume}%'>${text}</prosody></voice></speak>`

  // 获取音频
  function getAudio(state, localVoiceList) {
    const bufferList = []
    return new Promise((resolve, reject) => {
      if (!state.text) {
        reject('请输入文字')
        return
      }
      const ws = new WebSocket(
        'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=6A5AA1D4EAFF4E9FB37E23D68491D6F4'
      )
      ws.addEventListener('open', () => {
        ws.send(speechConfig())
        ws.send(
          ssmlText({
            lang: state.lang,
            voiceName: localVoiceList[state.lang][state.voice].Name,
            pitch: numToString(state.pitch),
            rate: numToString(state.rate),
            volume: numToString(state.volume),
            text: state.text
          })
        )
      })
      ws.addEventListener('message', async ({ data }) => {
        if (data instanceof Blob) {
          const view = new Uint8Array(await data.arrayBuffer())
          bufferList.push(
            ...view
              .toString()
              .split(binaryHeadEnd)[1]
              .split(',')
              .slice(1)
              .map((i) => +i)
          )
          if (view[0] === 0x00 && view[1] === 0x67 && view[2] === 0x58) {
            ws.close(1000)
          }
        }
      })
      ws.addEventListener('error', (err) => {
        console.log('------出错了', err)
        reject(err)
      })
      ws.addEventListener('close', (event) => {
        if (event.code !== 1000) {
          console.error('----关闭了', event)
          reject(event.code)
          return
        }
        const blob = new Blob([new Uint8Array(bufferList)], { type: 'audio/webm' })
        resolve(URL.createObjectURL(blob))
      })
    })
  }

  function speak() {
    internal.speaking = true
    getAudio(data, internal.voiceLists)
      .then((url) => {
        const audio = new Audio(url)
        audio.onended = () => {
          internal.speaking = false
        }
        audio.play()
      })
      .catch((err) => {
        Snackbar.error(err)
        internal.speaking = false
      })
  }

  function download() {
    internal.downloading = true
    getAudio(data, internal.voiceLists)
      .then((url) => {
        const link = document.createElement('a')
        link.download = `audio_${Date.now()}.webm`
        link.href = url
        link.style = 'display: none'
        document.body.append(link)
        link.click()
        link.remove()
      })
      .catch((err) => {
        Snackbar.error(err)
      })
      .finally(() => {
        internal.downloading = false
      })
  }

  fetchVoiceList()
</script>

<style scoped lang="scss">
  .input-number-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    .input-number-label {
      font-size: 14px;
      padding-bottom: 1px;
    }
  }
</style>
