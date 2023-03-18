<template>
  <canvas id="myCanvas"></canvas>
</template>

<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    let arr = []
    let maxDistance = 210
    let width = 1500
    let height = 600
    let speed = 80
    let canvas = document.getElementById('myCanvas')
    canvas.width = width
    canvas.height = height
    console.log(canvas)
    let context = canvas.getContext('2d')
    randomPoint(width, height, arr, speed)
    drawPoint(arr, context)
    drawLine(context, arr, maxDistance)

    function draw(last) {
      requestAnimationFrame(() => {
        const now = Date.now()
        context.fillStyle = 'antiquewhite'
        //清理画布
        context.fillRect(0, 0, width, height)
        const t = (now - last) / 1000
        for (let i = 0; i < arr.length; i++) {
          const p = arr[i]
          p.speedX += p.xForce * t
          p.speedY += p.yForce * t
          p.xPoint = p.xPoint + p.speedX * t
          if (p.xPoint < 0 || p.xPoint > width) {
            p.speedX = -p.speedX
            if (Math.abs(p.speedX) > speed) {
              p.speedX = randomNum(0.4, 0.9) * p.speedX
            }
            p.xPoint = p.xPoint < 0 ? -p.xPoint : 2 * width - p.xPoint
          }
          p.yPoint = p.yPoint + p.speedY * t
          if (p.yPoint < 0 || p.yPoint > height) {
            p.speedY = -p.speedY
            if (Math.abs(p.speedY) > speed) {
              p.speedY = randomNum(0.4, 0.9) * p.speedY
            }
            p.yPoint = p.yPoint < 0 ? -p.yPoint : 2 * height - p.yPoint
          }
          // 清空合力
          p.xForce = 0
          p.yForce = 0
        }
        drawLine(context, arr, maxDistance)
        drawPoint(arr, context)
        draw(now)
      })
    }
    draw(Date.now())
  })

  function drawLine(context, arr, maxDistance) {
    const G = 100_000
    for (let i = 0; i < arr.length; i++) {
      const p1 = arr[i]
      for (let j = i + 1; j < arr.length; j++) {
        const p2 = arr[j]
        const dx = p2.xPoint - p1.xPoint
        const dy = p2.yPoint - p1.yPoint
        let realDis = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
        let force = G / Math.pow(realDis, 2)
        let xForce = (force * dx) / realDis
        let yForce = (force * dy) / realDis
        p1.xForce -= xForce
        p1.yForce -= yForce
        p2.xForce += xForce
        p2.yForce += yForce
        if (realDis <= maxDistance) {
          let alpha = 1 - realDis / maxDistance
          context.strokeStyle = `rgba(0,0,0,${alpha})`
          context.beginPath()
          context.moveTo(p1.xPoint, p1.yPoint)
          context.lineTo(p2.xPoint, p2.yPoint)
          context.stroke()
        }
      }
    }
  }

  /**
   * 随机点
   */
  function randomPoint(x, y, arr, speed) {
    // let number = Math.floor(Math.random() * 100 + 20)
    let number = 70
    for (let i = 0; i < number; i++) {
      let obj = {}
      obj.xPoint = Math.floor(Math.random() * x)
      obj.yPoint = Math.floor(Math.random() * y)
      obj.speedX = randomNum(-speed, speed)
      obj.speedY = randomNum(-speed, speed)
      obj.xForce = 0
      obj.yForce = 0
      arr.push(obj)
    }
  }

  /**
   * 产生随机数
   * @param min
   * @param max
   * @returns {*}
   */
  function randomNum(min, max) {
    return Math.random() * (max - min) + min
  }

  /**
   * 画点
   * @param arr
   * @param context
   */
  function drawPoint(arr, context) {
    for (const obj of arr) {
      context.fillStyle = 'black'
      context.beginPath()
      context.arc(obj.xPoint, obj.yPoint, 2, 0, 2 * Math.PI)
      context.fill()
    }
  }
</script>

<style scoped></style>
