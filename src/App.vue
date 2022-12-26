<template>
  <var-sticky css-mode>
    <var-app-bar>
      <template #left>
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
  import { RouterView } from 'vue-router'
  import { StyleProvider, Themes } from '@varlet/ui'
  import { computed, reactive } from 'vue'

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

  toggleTheme()
</script>

<style lang="scss">
  .content {
    padding: 8px;
  }
</style>
