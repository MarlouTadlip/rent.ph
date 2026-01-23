<script setup lang="ts">
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
</script>

<template>
    <div class="h-[95vh] bg-top bg-cover w-full flex flex-col items-center gap-5 text-[#262626]">
        <div class="w-full">
            <ClientOnly>
                <navbar />
            </ClientOnly>
        </div>
        <div class="flex-grow flex justify-center mx-100 flex-col">
            <div class="py-10">
                <h1 class="text-left text-4xl font-bold">Property for Rent</h1>
            </div>
            <ClientOnly>
                <propertySearchBar />
            </ClientOnly>
        </div>
        <div class="min-h-screen w-screen p-8">
            <div class="flex flex-wrap justify-evenly gap-y-12 gap-x-2">
                <CardListing v-for="_ in new Array(8)"></CardListing>
            </div>
         </div>
    </div>
</template>