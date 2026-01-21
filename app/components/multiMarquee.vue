<script setup lang="ts">
import MarqueeRow from './marqueeRow.vue'

const rows = [
  ['Cebu City', 'IT Park', 'Lahug', 'Banilad', 'Talamban'],
  ['Apartments', 'Condos', 'Boarding Houses', 'Pet Friendly'],
  ['Near Schools', 'Near Malls', 'With Parking', 'Furnished'],
]
</script>

<template>
  <div class="space-y-4 bg-background p-4">
    <h1 class="text-3xl">Partnerships & Sponsors</h1>
    <p>Lorem ipsum</p>
    <MarqueeRow :items="rows[0]" />
    <MarqueeRow :items="rows[1]" reverse />
  </div>
</template>
