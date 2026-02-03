<script setup lang="ts">
import { ref, onMounted } from 'vue'
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import pagination from '~/components/pagination.vue'
import PropertiesPage from '~/components/propertiesPage.vue'
import propertiesAndListings2 from '~/components/propertiesAndListings2.vue'

const propertyStore = usePropertyStore()

const showFilters = ref(false)

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

const topSearches: string[] = [
  'Condominium for rent in Cebu City',
  'House and lot for rent in Lapu-Lapu City',
  'House and lot for rent in Mactan',
  'Studio Unit for rent in Makati',
  'Unit for rent in Bonifacio Global City',
  'Commercial Space in Philippines',
  'Commercial Spaces in Mandaue City',
  'Warehouse for rent in Cagayan de Oro',
  'Pet friendly unit in Manila',
  'For rent in Batangas',
  'Warehouse for lease in General Santos',
  'Commercial space for rent in Gensan',
  'Davao house and lot for rent',
  'Davao studio unit for rent',
  '1 bedroom unit for rent in Davao City',
  'Warehouse for rent in Puerto Princesa',
  '2BR condo w/ parking for rent in Cebu City',
  'Parking Space for rent',
  'Rental properties in Pampanga',
  '1 Bedroom in Cebu City',
  'Studio in Metro Manila',
  'Rental Properties in Makati City',
]

onMounted(async () => {
  await propertyStore.getProperties()
})
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    
    <div class="flex flex-col w-full px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-30 pb-10 md:pb-20">
      <!-- Page Title -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8">Property for Rent</h1>

      <!-- Mobile Filter Toggle Button -->
      <button 
        @click="showFilters = !showFilters"
        class="md:hidden mb-6 w-full py-3 px-4 bg-[#fe8e0a] text-[#fafafa] rounded-lg flex items-center justify-center gap-2 font-medium shadow-md"
      >
        <Icon :name="showFilters ? 'lucide:x' : 'lucide:list-filter'" class="size-5" />
        {{ showFilters ? 'Hide Categories' : 'Filter by Categories' }}
      </button>

      <div class="flex flex-col md:flex-row gap-4 md:gap-6">
        <!------------------------------------ Categories & Filters Section ------------------------------------>
        <aside 
          id="categoriesSection" 
          class="w-full md:w-1/4 lg:w-1/5 h-fit mb-6 md:mb-20 transition-all duration-300"
          :class="{ 'hidden md:block': !showFilters }"
        >
          <!-- Categories -->
          <div class="mb-6">
            <h2 class="font-bold text-base md:text-lg dark:text-white dark:bg-[#212121] bg-orange-300 px-3 rounded-sm py-2">
              Categories
            </h2>
            <div class="mt-3 md:mt-5 mb-6 md:mb-10">
              <template v-for="(listings, category) in categories" :key="category">
                <div class="flex justify-between mt-3 md:mt-4 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 py-1 rounded transition-colors">
                  <a href="#" class="text-xs sm:text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors">
                    {{ category }} 
                  </a>
                  <a href="#" class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    {{ listings }}
                  </a>
                </div>
              </template>
            </div>
          </div>

          <!-- Top Searches -->
          <div>
            <h2 class="font-bold text-base md:text-lg dark:text-white dark:bg-[#212121] bg-orange-300 px-3 rounded-sm">
              Top Rental Searches
            </h2>
            <div class="mt-3 md:mt-5">
              <template v-for="search in topSearches" :key="search">
                <div class="flex mt-3 md:mt-4 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 py-1 rounded transition-colors">
                  <a href="#" class="text-xs sm:text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors">
                    {{ search }} 
                  </a>
                </div>
              </template>
            </div>
          </div>
        </aside>

        <!------------------------------------ Properties Section ------------------------------------>
        <main 
          id="propertiesSection" 
          class="w-full md:w-3/4 lg:w-4/5 flex flex-col overflow-y-auto pr-0 md:pr-2 custom-scrollbar" 
          :style="{ maxHeight: showFilters ? 'auto' : 'calc(175vh)' }"
        >
          <ClientOnly>
            <propertySearchBar />
            <propertiesAndListings2 :properties="propertyStore.properties" />
          </ClientOnly>
        </main>
      </div>
    </div>

    <!-- Backlinks Section -->
    <div class="pt-8 md:pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>

    <!-- Footer -->
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(156, 163, 175, 0.7);
}
</style>