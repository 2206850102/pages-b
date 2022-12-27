<template>
  <var-sticky css-mode>
    <var-app-bar>
      <template #left>
        <var-button v-if="router.currentRoute.value.path !== '/'" @click="goBack" round text>
          <var-icon name="chevron-left" />
        </var-button>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="24" height="24" />
      </template>
      <template #right>
        <var-button @click="toggleTheme" round text>
          <var-icon :name="themeIconName" />
        </var-button>
      </template>
    </var-app-bar>
  </var-sticky>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView, useRouter } from 'vue-router'
  import { StyleProvider, Themes } from '@varlet/ui'
  import { computed, onBeforeMount, reactive } from 'vue'

  const router = useRouter()

  const internal = reactive({
    darkTheme: false
  })

  const themeIconName = computed(() => {
    if (internal.darkTheme) return 'weather-night'
    return 'white-balance-sunny'
  })

  const toggleTheme = () => {
    internal.darkTheme = !internal.darkTheme
    StyleProvider(internal.darkTheme ? Themes.dark : null)
  }

  const goBack = () => {
    router.back()
  }

  onBeforeMount(toggleTheme)
</script>

<style lang="scss">
  .logo {
    margin-left: 8px;
  }

  .content {
    padding: 8px;
  }
</style>
