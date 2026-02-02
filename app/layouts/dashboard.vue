<script setup lang="ts">
// SEO Meta for dashboard pages
useHead({
  title: 'Dashboard - Rent.ph',
  meta: [
    { name: 'description', content: 'Rent management dashboard' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <DashboardSideBar />
    <main class="lg:pl-64">
      <div class="p-4 lg:p-6">
        <slot />
      </div>
    </main>
  </div>
</template>
