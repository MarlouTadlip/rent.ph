<script setup lang="ts">
import { ref, onMounted } from 'vue'

const managerStore = useManagerStore()
const showFilters = ref(false) // Toggle state for mobile sidebar

onMounted(async () => {
  await managerStore.getManagers(1, 8)
})

const handlePageChange = (page: number) => {
  // currentPage.value = page
  console.log('Changed to page:', page)
}
const managers = [
  {
    id: 1,
    phone: 123456789,
    name: 'Rebecca Ferguson',
    email: 'rebecca@rent.com',
    photo: '/rebecca.png',
    location: 'Downtown, Oak Street',
    status: '613 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 1',
    reviewList: [
      { user: 'John', comment: 'shes very pretty and cool', rating: 5 },
      { user: 'Kobe', comment: 'i love how she treats her customers', rating: 5 },
      { user: 'Bryan', comment: 'She is great at customer service', rating: 5 },
      { user: 'Bryl', comment: '100% reccomend this agent', rating: 5 },
      { user: 'Bernerd', comment: 'very cool very nice', rating: 5 },
    ],
  },
  {
    id: 2,
    phone: 123456789,
    name: 'Tom Cruise',
    email: 'tom@rent.com',
    photo: '/img.png',
    location: 'Manila, PH',
    status: '120 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 2',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 3,
    phone: 123456789,
    name: 'Henry Cavill',
    email: 'henry@rent.com',
    photo: '/javie-gemini.png',
    location: 'Cebu City',
    status: '45 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 3',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 4,
    phone: 123456789,
    name: 'Simon Pegg',
    email: 'simon@rent.com',
    photo: '/elaine-gemini.png',
    location: 'Davao City',
    status: '12 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 4',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 1,
    phone: 123456789,
    name: 'Rebecca Ferguson',
    email: 'rebecca@rent.com',
    photo: '/rebecca.png',
    location: 'Downtown, Oak Street',
    status: '613 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 1',
    reviewList: [
      { user: 'John', comment: 'shes very pretty and cool', rating: 5 },
      { user: 'Kobe', comment: 'i love how she treats her customers', rating: 5 },
      { user: 'Bryan', comment: 'She is great at customer service', rating: 5 },
      { user: 'Bryl', comment: '100% reccomend this agent', rating: 5 },
      { user: 'Bernerd', comment: 'very cool very nice', rating: 5 },
    ],
  },
  {
    id: 2,
    phone: 123456789,
    name: 'Tom Cruise',
    email: 'tom@rent.com',
    photo: '/img.png',
    location: 'Manila, PH',
    status: '120 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 2',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 3,
    phone: 123456789,
    name: 'Henry Cavill',
    email: 'henry@rent.com',
    photo: '/javie-gemini.png',
    location: 'Cebu City',
    status: '45 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 3',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 4,
    phone: 123456789,
    name: 'Simon Pegg',
    email: 'simon@rent.com',
    photo: '/elaine-gemini.png',
    location: 'Davao City',
    status: '12 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 4',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
]

const categories: Record<string, string> = {
  'Farm Land': '1',
  Condominium: '1951',
  Studio: '730',
  '1 Bedroom': '489',
  '2 Bedroom': '334',
  '3 Bedroom': '70',
  'House and Lot': '1464',
  Apartment: '327',
  'Lot Only': '153',
  'Bed Space': '37',
  'Town House': '94',
  Dormitory: '7',
  'Commercial Spaces': '653',
  'Office Spaces': '254',
  Warehouse: '227',
  'Beach House': '8',
  'Conference Hall': '1',
  'Function Hall': '1',
  'Parking Space': '9',
  Others: '50',
}
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col overflow-x-hidden">
    <ClientOnly>
      <navbar />
    </ClientOnly>

    <div class="flex flex-col w-full px-4 sm:px-6 md:px-10 pt-20 md:pt-30 pb-10 md:pb-20">
      
      <h1 class="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-center md:text-left">
        Rent Managers
      </h1>

      <button 
        @click="showFilters = !showFilters"
        class="md:hidden mb-6 w-full py-3 px-4 bg-[#fe8e0a] text-[#fafafa] rounded-lg flex items-center justify-center gap-2 font-medium shadow-md"
      >
        <Icon :name="showFilters ? 'lucide:x' : 'lucide:list-filter'" class="size-5" />
        {{ showFilters ? 'Close Categories' : 'Filter by Category' }}
      </button>

      <div class="flex flex-col md:flex-row gap-8">
        
        <aside
          id="categoriesSection"
          class="w-full md:w-1/4 lg:w-1/5 h-fit border border-gray-200 rounded-xl bg-white shadow-lg p-6 md:p-8 dark:bg-[#212121] dark:border-gray-800 transition-all duration-300"
          :class="[showFilters ? 'block' : 'hidden md:block']"
        >
          <h2 class="font-bold text-xl dark:text-white mb-6 border-b pb-2 border-gray-100 dark:border-gray-700">
            Categories
          </h2>
          <div class="space-y-4">
            <template v-for="(listings, category) in categories" :key="category">
              <div class="flex justify-between items-center group">
                <a
                  href="#"
                  class="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#fe8e0a] transition-colors"
                >
                  {{ category }}
                </a>
                <span class="text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-500">
                  {{ listings }}
                </span>
              </div>
            </template>
          </div>
        </aside>

        <main class="w-full md:w-3/4 lg:w-4/5">
          <div class="w-full">
            <ClientOnly>
              <AgentSearchBar />
            </ClientOnly>

            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <agentscard
                v-for="manager in managerStore.managers"
                :key="manager.id"
                v-bind="manager"
                orientation="vertical"
                class="w-full"
              />
            </div>

            <div class="flex justify-center mt-12 overflow-x-auto py-2">
              <pagination
                :current-page="managerStore.pagination?.current_page ?? 1"
                :total-pages="managerStore.pagination?.total ?? 1"
                @page-change="handlePageChange"
              />
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="mt-auto">
      <ClientOnly>
        <Backlinks />
        <Footer />
      </ClientOnly>
    </div>
  </div>
</template>
