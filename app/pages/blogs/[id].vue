<script setup lang="ts">
const blogStore = useBlogStore()

function formatDate(s: string) {
  if (!s) return ''
  const d = new Date(s)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

onMounted(async () => {
  const route = useRoute()
  const { id } = route.params
  await blogStore.getBlog(id as string)
})
</script>

<template>
  <div id="wholePage" class="w-screen min-h-screen flex flex-col">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    
    <div
      class="bg-[url(/blogBackGround.png)] dark:bg-[url(/blogBackGroundDark.png)] bg-no-repeat w-full h-full bg-cover fixed inset-0 -z-10"
    />

    <BlogDetailSkeleton v-if="blogStore.loading" />

    <div v-else id="scrollArea" class="w-full">
      <div id="HeadSection" class="flex flex-col items-center px-6 text-center">
        <h1 class="text-3xl md:text-5xl pt-32 md:pt-50 font-bold max-w-4xl">
          {{ blogStore.blog?.title }}
        </h1>
        
        <div id="DetailsSection" class="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-6 text-sm md:text-base">
          <div class="flex flex-row gap-2 items-center">
            <Icon name="lucide:calendar-clock" class="size-4" />
            <p>{{ formatDate(blogStore.blog?.created_at || new Date().toISOString()) }}</p>
          </div>
          <p class="hidden sm:block text-gray-400">|</p>
          <div class="flex flex-row gap-2 items-center">
            <Icon name="lucide:eye" class="size-4" />
            <p>{{ blogStore.blog?.view }} view{{ blogStore.blog?.view !== 1 ? 's' : '' }}</p>
          </div>
        </div>
      </div>

      <div id="SocialSection" class="flex flex-col items-center mt-10 px-4">
        <div class="w-full max-w-3xl aspect-video md:aspect-square overflow-hidden rounded-xl shadow-lg">
          <img 
            :src="blogStore.blog?.image" 
            alt="Blog Hero" 
            class="w-full h-full object-cover" 
          />
        </div>

        <div class="w-full max-w-3xl flex flex-row items-center gap-4 mt-8 md:mt-12 border-b border-gray-200 dark:border-gray-800 pb-4">
          <p class="font-semibold">Share:</p>
          <button class="hover:scale-110 transition-transform"><Icon name="lucide:facebook" class="text-blue-600 size-6" /></button>
          <button class="hover:scale-110 transition-transform"><Icon name="ic:baseline-whatsapp" class="text-green-500 size-6" /></button>
          <button class="hover:scale-110 transition-transform"><Icon name="lucide:link" class="size-5" /></button>
        </div>
      </div>

      <main class="max-w-4xl mx-auto px-6 py-8 md:py-12 font-sans leading-relaxed">
        <div
          class="prose prose-lg dark:prose-invert max-w-none prose-img:rounded-xl"
          v-html="
            blogStore.blog?.content
              ?.replaceAll('Calibri', 'Poppins')
              ?.replaceAll('color: #000000; ', '')
          "
        ></div>

        <div id="RelatedBlogsSection" class="mt-20">
          </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Ensure v-html images don't overflow their container */
:deep(img) {
  max-width: 100%;
  height: auto;
}
</style>