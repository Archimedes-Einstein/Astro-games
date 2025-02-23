<script setup>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/carousel-components/Carousel.vue'
import ContentBody from '@/components/content-component/ContentBody.vue'
</script>

<template>
  <main class="w-full h-full">
    <header class="w-full h-full">
      <Navbar />
    </header>
    <section class="body-section">
      <Carousel :interval="3000" controls indicators />
      <ContentBody />
    </section>
  </main>
</template>

<style scope>
.gap-2 {
  gap: 20px;
}
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-container {
  width: 370px;
  height: 36px;
  position: relative;
  transition: all 0.53s ease;
}
.search-container input {
  width: 100%;
  height: 100%;
  border-radius: 38px;
  background-color: #5e5454;
  padding-left: 30px;
}
@media (max-width: 768px) {
  .search-container {
    width: 100%;
    height: 66px;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }
}
</style>
