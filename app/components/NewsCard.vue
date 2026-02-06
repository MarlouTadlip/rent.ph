<script setup lang="ts">
// This component doesn't require any props
// Breaking News Ticker
const breakingNews = ref([
  { id: 1, title: 'Cool down!', image: 'https://images.unsplash.com/photo-1519944159858-806d435dc86b?auto=format&fit=crop&w=100&q=80' },
  { id: 2, title: 'Searching for the forgotten heroes of World War Two', image: 'https://images.unsplash.com/photo-1505242507927-994348259d28?auto=format&fit=crop&w=100&q=80' },
  { id: 3, title: 'Google hit with record EU fine over Shopping service', image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=100&q=80' },
  { id: 4, title: 'New study reveals climate change impacts', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=100&q=80' },
])

// Editor's Picks
const editorsPicks = ref([
  {
    id: 1,
    title: "76ers set record with 15th consecutive win",
    category: 'NATIONAL',
    tags: ['TECH', 'TRENDING'],
    time: '2 min read',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: "No, Facebook doesn't secretly listen via your microphone",
    category: 'NATIONAL',
    tags: ['TECH', 'TRENDING'],
    time: '2 min read',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: "LabCorp hit with federal suit over robocalls",
    category: 'NATIONAL',
    time: '2 min read',
    image: 'https://images.unsplash.com/photo-1589210339058-dd3ea49c4470?auto=format&fit=crop&w=800&q=80'
  }
])

// Main News
const mainNews = ref({
  id: 1,
  title: 'Google hit with record EU fine over Shopping service',
  category: 'NEWSBEAT',
  tags: ['TECH'],
  author: 'All Devices',
  time: '1 year ago',
  views: 72,
  image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
})

// Trending Now
const trendingNow = ref([
  { id: 1, number: 1, title: "Is your city's population keeping pace?", image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80' },
  { id: 2, number: 2, title: "Trump-Putin: The understandable story", image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=400&q=80' },
  { id: 3, number: 3, title: "Business booming for giant cargo planes", image: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=400&q=80' },
  { id: 4, number: 4, title: "Somebody threatened to burn the school down", image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80' },
  { id: 5, number: 5, title: "76ers set record with 15th consecutive win", image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=400&q=80' }
])

// Featured Posts
const featuredPosts = ref([
  {
    id: 1,
    title: 'Google hit with record EU fine over Shopping service',
    category: 'NEWSBEAT',
    tags: ['TECH'],
    author: 'All Devices',
    time: '1 year ago',
    readTime: '2 min read',
    views: 72,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Business booming for giant cargo planes',
    category: 'BUSINESS',
    author: 'All Devices',
    time: '1 year ago',
    readTime: '2 min',
    views: 15,
    image: 'https://images.unsplash.com/photo-1464037862896-6a7522b40d72?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Trump-Putin: The understandable story',
    category: 'NEWSBEAT',
    tags: ['NEWSBEAT'],
    author: 'All Devices',
    time: '1 year ago',
    readTime: '2 min read',
    views: 24,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e443d1fe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Somebody threatened to burn the school down',
    category: 'NEWSBEAT',
    author: 'All Devices',
    time: '1 year ago',
    readTime: '2 min read',
    views: 9,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&w=800&q=80'
  }
])

// Express Posts 1
const expressPosts1 = ref([
  { id: 1, title: 'Google hit with record EU fine over Shopping service', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: 'Business booming for giant cargo planes', category: 'BUSINESS', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&w=600&q=80' },
  { id: 3, title: 'Trump-Putin: The understandable story', category: 'BUSINESS', tags: ['NEWSBEAT'], image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' }
])

// Express Posts 2
const expressPosts2 = ref([
  { id: 1, title: "Is your city's population keeping pace?", category: 'RESEARCH', tags: ['TRENDING'], image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80' },
  { id: 2, title: "No, Facebook doesn't secretly listen via your microphone", category: 'NATIONAL', tags: ['TECH', 'TRENDING'], image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80' }
])

const currentNewsIndex = ref(0)

onMounted(() => {
  // Auto-rotate breaking news
  setInterval(() => {
    currentNewsIndex.value = (currentNewsIndex.value + 1) % breakingNews.value.length
  }, 5000)
})
</script>

<template>
    
  <div class="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
    <!-- Navigation Bar -->


    <!-- Breaking News Ticker -->
    <div class="bg-red-600 dark:bg-red-700 mt-20 text-white py-3 overflow-hidden">
      <div class="max-w-8xl mx-auto px-4">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full shrink-0">
            <Icon name="lucide:radio" class="size-4" />
            <span class="text-sm font-bold uppercase">Breaking News</span>
          </div>
          <div class="flex gap-8 animate-marquee">
            <div v-for="news in breakingNews" :key="news.id" class="flex items-center gap-3 shrink-0">
              <div class="size-8 rounded-lg bg-white/10 overflow-hidden shrink-0">
                <img :src="news.image" class="size-full object-cover" alt="" />
              </div>
              <span class="text-sm font-medium whitespace-nowrap">{{ news.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-8xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left Column: Editor's Picks -->
        <div class="lg:col-span-3">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Editor's Picks</h2>
          </div>
          <div class="space-y-4">
            <div v-for="(pick, index) in editorsPicks" :key="pick.id">
              <div v-if="index === 0" class="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img :src="pick.image" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span v-for="tag in pick.tags" :key="tag" class="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase">{{ tag }}</span>
                  </div>
                  <h3 class="text-white font-bold text-lg mb-2 line-clamp-2">{{ pick.title }}</h3>
                  <div class="flex items-center gap-2 text-white/80 text-xs">
                    <span>{{ pick.time }}</span>
                    <span>{{ pick.category }}</span>
                  </div>
                </div>
              </div>
              <div v-else class="group cursor-pointer">
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{{ pick.time }}</span>
                  <span class="uppercase font-bold">{{ pick.category }}</span>
                  <span v-for="tag in pick.tags" :key="tag" class="text-blue-600 dark:text-blue-400 font-bold uppercase">{{ tag }}</span>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-sm group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">{{ pick.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- Center Column: Main News -->
        <div class="lg:col-span-6">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Main News</h2>
          </div>
          <div class="relative rounded-3xl overflow-hidden group cursor-pointer mb-8">
            <img :src="mainNews.image" class="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full uppercase">{{ mainNews.category }}</span>
                <span class="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase">{{ mainNews.tags[0] }}</span>
                <span class="text-white/70 text-xs">{{ mainNews.time }}</span>
              </div>
              <h3 class="text-white font-black text-3xl mb-4">{{ mainNews.title }}</h3>
              <div class="flex items-center gap-4 text-white/80 text-sm">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:user" class="size-4" />
                  <span>{{ mainNews.author }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:clock" class="size-4" />
                  <span>{{ mainNews.time }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:eye" class="size-4" />
                  <span>{{ mainNews.views }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Featured Posts -->
          <div class="mb-8">
            <div class="flex items-center gap-2 mb-6">
              <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">Featured Posts</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="post in featuredPosts" :key="post.id" class="group cursor-pointer">
                <div class="relative rounded-2xl overflow-hidden mb-4">
                  <img :src="post.image" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
                  <div class="absolute top-4 left-4 flex items-center gap-2">
                    <div class="size-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Icon name="lucide:bookmark" class="size-5 text-white" />
                    </div>
                    <span class="px-3 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs font-bold rounded-full">{{ post.readTime }}</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full uppercase">{{ post.category }}</span>
                    <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase">{{ tag }}</span>
                  </div>
                  <h3 class="text-gray-900 dark:text-white font-bold text-lg group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">{{ post.title }}</h3>
                  <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-xs">
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:user" class="size-3" />
                      <span>{{ post.author }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:clock" class="size-3" />
                      <span>{{ post.time }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="lucide:heart" class="size-3" />
                      <span>{{ post.views }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Trending Now -->
        <div class="lg:col-span-3">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
          </div>
          <div class="space-y-4">
            <div v-for="trend in trendingNow" :key="trend.id" class="group cursor-pointer">
              <div class="flex items-start gap-4">
                <div class="size-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 flex items-center justify-center shrink-0 shadow-lg">
                  <span class="text-white font-black text-xl">{{ trend.number }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="relative rounded-xl overflow-hidden mb-2 h-20">
                    <img :src="trend.image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
                  </div>
                  <h3 class="text-gray-900 dark:text-white font-bold text-sm group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">{{ trend.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Express Posts Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <!-- Express Posts 1 -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Express Posts 1</h2>
          </div>
          <div class="grid grid-cols-1 gap-6">
            <div v-for="(post, index) in expressPosts1" :key="post.id">
              <div v-if="index === 0" class="relative rounded-2xl overflow-hidden group cursor-pointer">
                <img :src="post.image" class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <h3 class="text-white font-bold text-xl">{{ post.title }}</h3>
                </div>
              </div>
              <div v-else class="flex gap-4 group cursor-pointer">
                <div class="relative w-32 h-24 rounded-xl overflow-hidden shrink-0">
                  <img :src="post.image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
                </div>
                <div class="flex-1">
                  <span v-if="post.category" class="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-full uppercase mb-2">{{ post.category }}</span>
                  <h3 class="text-gray-900 dark:text-white font-bold text-sm group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">{{ post.title }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Express Posts 2 -->
        <div>
          <div class="flex items-center gap-2 mb-6">
            <div class="w-1 h-6 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Express Posts 2</h2>
          </div>
          <div class="space-y-6">
            <div v-for="post in expressPosts2" :key="post.id" class="flex gap-4 group cursor-pointer">
              <div class="relative w-40 h-28 rounded-xl overflow-hidden shrink-0">
                <img :src="post.image" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="" />
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full uppercase">{{ post.category }}</span>
                  <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase">{{ tag }}</span>
                </div>
                <h3 class="text-gray-900 dark:text-white font-bold text-sm group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">{{ post.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>