<script setup lang="ts">
const colorMode = useColorMode()
const heroBg = computed(() => {
  if (colorMode.preference === 'light') {
    return `bg-[url('/hero.jpg')]`
  } else {
    return `bg-[url('/hero-dark.jpg')]`
  }
})
</script>
<template>
  <div :class="['h-[70vh] bg-center bg-cover w-screen', heroBg]"></div>
</template>
