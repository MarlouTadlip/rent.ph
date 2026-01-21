<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  items?: string[]
  reverse?: boolean
  speed?: number
}>()

const track = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()

  const el = track.value!
  const halfWidth = el.scrollWidth / 2
  const direction = props.reverse ? 1 : -1
  const duration = props.speed ?? 20

  gsap.set(el, { x: 0 })

  gsap.to(el, {
    x: direction * halfWidth,
    duration,
    ease: 'linear',
    repeat: -1,
    modifiers: {
      x: (x) => `${parseFloat(x) % halfWidth}px`,
    },
  })
})
</script>

<
<template>
  <div class="relative overflow-hidden w-full">
    <div ref="track" class="flex w-max gap-6">
      <div
        v-for="(item, i) in items"
        :key="'a' + i"
        class="px-6 py-3 rounded-xl border bg-card text-card-foreground shadow-sm"
      >
        {{ item }}
      </div>

      <div
        v-for="(item, i) in items"
        :key="'b' + i"
        class="px-6 py-3 rounded-xl border bg-card text-card-foreground shadow-sm"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
