<script setup lang="ts">
</script>
<template>
  <div class="w-screen min-h-screen bg-[url(/blogIndexBG.png)] bg-no-repeat bg-contain">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div id="blogsContainer">
      <NewsHero />
      <NewsHeader />
      <NewsBlogs />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
