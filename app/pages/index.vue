<script setup lang="ts"></script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <Marquee
      :items="[
        'Apartments',
        'Condos',
        'Boarding Houses',
        'Pet Friendly',
        'Near IT Park',
        'Budget Rentals',
      ]"
    />
    <div class="h-screen w-screen"></div>
  </div>
</template>
