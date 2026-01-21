<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from './ui/marquee'
import ReviewCard from './ui/marquee/ReviewCard.vue'

const reviews = [
  {
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    img: 'https://avatar.vercel.sh/john',
  },
  {
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    img: 'https://avatar.vercel.sh/james',
  },
]

const firstRow = ref(reviews.slice(0, reviews.length / 2))
const secondRow = ref(reviews.slice(reviews.length / 2))
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl">Partners & Sponsors</h1>
    <p>Lorem ipsum</p>
  </div>
  <div
    class="bg-background relative flex h-50 w-screen flex-col items-center justify-center overflow-hidden mb-5 gap-y-5"
  >
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in firstRow" :key="review.img" :img="review.img" />
    </Marquee>

    <Marquee reverse pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in secondRow" :key="review.img" :img="review.img" />
    </Marquee>

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white"
    />

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white"
    />
  </div>
</template>
