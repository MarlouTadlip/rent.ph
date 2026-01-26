<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const { id } = route.params
const { name, phone, email, photo, location, status, reviews, about, reviewList } = route.query

const activeTab = ref('Intro')

const goBack = () => {
  navigateTo('/agent')
}

// Helper to parse reviews if they come as a JSON string
const parsedReviews = computed(() => {
  if (!reviewList) return []
  return typeof reviewList === 'string' ? JSON.parse(reviewList) : reviewList
})
</script>

<template>
  <ClientOnly>
    <Navbar />
  </ClientOnly>

  <div class="min-h-screen w-full bg-gray-100 flex items-center mt-[4em] flex-col justify-center dark:bg-[#18191a] pb-10">

    <div class="bg-white w-[98%] dark:bg-[#242526] shadow-sm">
      <div class="w-full mx-auto">
        <div
          class="relative h-48 md:h-80 w-full bg-gray-200 dark:bg-gray-700 rounded-b-xl flex flex-col items-center justify-center text-white p-6 overflow-hidden">

          <button @click="goBack"
            class="absolute top-4 flex items-center dark:text-white-300 justify-center gap-2 left-4 cursor-pointer bg-black/10 hover:bg-blue/20 text-white p-2 rounded-md transition-all z-20">
            <Icon name="lucide:arrow-left" class="size-5 dark:text-white-400" />
            Back to rent managers
          </button>

          <div class="flex flex-col items-center space-y-2 select-none">
            <div class="flex items-center gap-4">
              <NuxtImg src="/rentph-logo.png" alt="RentPH Logo" class="h-16 md:h-20 object-contain" />
            </div>
            <p class="text-sm md:text-lg font-medium opacity-90 dark:text-white-400 uppercase tracking-[0.2em]">
              Philippines #1 Property Rental website
            </p>
          </div>

          <div
            class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
          </div>
        </div>

        <div
          class="px-4 pb-4 flex justify-center flex-col md:flex-row items-center -mt-12 md:-mt-16 gap-4 relative z-10">
          <div class="relative">
            <div :style="{ backgroundImage: `url(${photo})` }"
              class="size-32 md:size-60 bg-cover bg-center rounded-full border-4 border-white dark:border-[#242526] shadow-md bg-gray-200">
            </div>
            <!-- <div
              class="absolute bottom-3 right-4 p-1 bg-[#1877f2] w-10 rounded-full border-2 border-white dark:border-[#242526]">
              <Icon name="lucide:check" class="size-5 text-center text-white" />
            </div> -->
          </div>

          <div class="flex-1 gap-3 pb-2 mt-6 text-center md:text-left">
            <h1 class="text-4xl font-bold text-black dark:text-gray-300">{{ name }}</h1>
            <div class="flex items-center gap-4 ">
              <Icon v-for="_ in 5" name="radix-icons:star-filled" class="size-3.5 text-yellow-500" />
              <p class="text-gray-500 dark:text-gray-400 font-medium">{{ reviews }}</p>
            </div>
            <p class="text-gray-500 dark:text-gray-400 font-medium">Total Listings: {{ status }}</p>
            <div>
              <p class="text-gray-500 dark:text-gray-400 font-medium">My Achievments: </p>
            </div>
          </div>

          <div class="flex gap-2 pb-2">
            <button
              class="bg-green-500 text-white px-6 py-2 rounded-md font-bold flex items-center gap-2 hover:bg-green-800 transition-all shadow-sm">
              <Icon name="lucide:message-circle" class="size-5 text-white" />
              Message
            </button>
          </div>
        </div>


      </div>
    </div>

    <div class="w-full mx-auto px-4 mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">

      <div class="md:col-span-2 w-full space-y-4">
        <div class="bg-white dark:bg-[#242526] p-4 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800">
          <div
            class="border-t border-gray-200 dark:border-zinc-800 mx-4 mt-2 flex gap-4 text-gray-500 dark:text-gray-400 font-semibold py-1">
            <div @click="activeTab = 'Intro'"
              :class="{ 'border-b-4 border-[#1877f2] text-[#1877f2]': activeTab === 'Intro' }"
              class="px-4 py-3 cursor-pointer transition-all">
              Intro
            </div>
            <div @click="activeTab = 'About'"
              :class="{ 'border-b-4 border-[#1877f2] text-[#1877f2]': activeTab === 'About' }"
              class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer transition-all">
              About Me
            </div>
            <div @click="activeTab = 'Reviews'"
              :class="{ 'border-b-4 border-[#1877f2] text-[#1877f2]': activeTab === 'Reviews' }"
              class="px-4 py-3 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer transition-all">
              Reviews
            </div>
          </div>

          <div class="md:col-span-2 w-full space-y-4">
            <div
              class="bg-white dark:bg-[#242526] p-4 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800">

              <div v-if="activeTab === 'Intro'">
                <h2 class="text-xl font-bold text-black dark:text-white mb-4">Intro</h2>
                <div class="space-y-4 text-[15px]">
                  <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Icon name="lucide:map-pin" class="size-5 text-gray-400" />
                    <span>Lives in <b>{{ location }}</b></span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Icon name="lucide:mail" class="size-5 text-gray-400" />
                    <span>Contact: <b>{{ email }}</b></span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Icon name="lucide:phone" class="size-5 text-gray-400" />
                    <span>Mobile: <b>{{ phone }}</b></span>
                  </div>
                  <div class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <Icon name="lucide:fingerprint" class="size-5 text-gray-400" />
                    <span>Verified Agent ID: <b>{{ id }}</b></span>
                  </div>
                </div>
              </div>

              <div v-if="activeTab === 'About'">
                <h2 class="text-xl font-bold text-black dark:text-white mb-4">About Me</h2>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {{ about || 'No bio available.' }}
                </p>
              </div>

              <div v-if="activeTab === 'Reviews'">
                <h2 class="text-xl font-bold text-black dark:text-white mb-4">Client Reviews</h2>
                <div v-if="parsedReviews.length" class="space-y-4">
                  <div v-for="(rev, index) in parsedReviews" :key="index"
                    class="border-b border-gray-100 dark:border-zinc-800 pb-3 last:border-0">
                    <p class="font-bold text-sm dark:text-white">{{ rev.user }}</p>
                    <div class="flex gap-1 my-1">
                      <Icon v-for="i in rev.rating" name="radix-icons:star-filled" class="size-3 text-yellow-500" />
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400 italic">"{{ rev.comment }}"</p>
                  </div>
                </div>
                <p v-else class="text-gray-500">No reviews yet.</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div class="md:col-span-3">
        <div class="bg-white dark:bg-[#242526] p-4 rounded-xl shadow-sm border border-gray-200 dark:border-zinc-800">
          <div class="flex flex-col items-center gap-2">
            <PropertiesAndListings/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>