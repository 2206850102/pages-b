<template>
  <main>
    <var-space>
      <var-button @click="gotoAboutPage">About Page</var-button>
      <var-button @click="gotoTextAudio">Text Audio</var-button>
      <var-button @click="getBackgroundEffect">Star line</var-button>
    </var-space>
  </main>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const gotoAboutPage = () => {
    router.push('/about')
  }

  const gotoTextAudio = () => {
    router.push('/text-audio')
  }

  const getBackgroundEffect = () => {
    router.push('/background-effect')
  }
</script>
