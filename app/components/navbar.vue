<script setup lang="ts">
const scrollPosY = ref(0)
const navbarClass = computed(() => {
  if (scrollPosY.value >= 30)
    return 'w-11/12 h-4/5 border-2 border-[#205ed7] rounded-full bg-[#205ed7]/10'
  else return 'w-full  h-full'
})
const ypos = () => {
  console.log(scrollPosY.value)
}
window.addEventListener('scroll', function () {
  scrollPosY.value = window.scrollY
})
const anchors = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/aboutus',
    label: 'About Us',
  },
  {
    link: '/property',
    label: 'Properties',
  },
  {
    link: '/agent',
    label: 'Rent Managers',
  },
  {
    link: '/news',
    label: 'Blog',
  },
  {
    link: '/contact',
    label: 'Contact Us',
  },
]
</script>
<template>
  <div class="fixed top-0 z-100 flex items-center justify-center h-20 w-full">
    <div
      :class="[
        'transition-all duration-400  flex justify-between items-center py-4 px-6',
        navbarClass,
      ]"
    >
      <NuxtImg src="/rentph-logo.png" class="h-12" />
      <div class="flex h-full gap-8 items-center">
        <NuxtLink
          v-for="anchor in anchors"
          :to="anchor.link"
          class="relative group pb-1 hover:text-[#205ed7] duration-300 transition-colors"
        >
          {{ anchor.label }}
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-[#205ed7] origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </NuxtLink>
      </div>
      <div class="flex h-full gap-4 items-center">
        <Button @click="ypos" variant="outline">Login</Button>
        <Button variant="default">Register</Button>
      </div>
    </div>
  </div>
</template>
