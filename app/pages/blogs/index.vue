<script setup lang="ts">
const blogStore = useBlogStore()

onMounted(async () => {
  await blogStore.getBlogs(1, 5)
})
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div>
      <NewsHero />
      <NewsHeaderSkeleton v-if="blogStore.loading" />
      <NewsHeader v-else v-bind="blogStore.blogs[0]!" />

      <NewsBlogsSkeleton v-if="blogStore.loading" />
      <NewsBlogs v-else :blogs="blogStore.blogs.slice(1)" />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
