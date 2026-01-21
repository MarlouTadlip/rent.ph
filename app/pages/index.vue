<script setup lang="ts">
import Multimarquee from '~/components/multiMarquee.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <Multimarquee />
    <div class="h-screen w-screen"></div>
  </div>
</template>
