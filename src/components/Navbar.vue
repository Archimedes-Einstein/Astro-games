<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="search-bar bg-[#262626] flex justify-around items-center h-[5rem]">
    <div class="flex justify-between items-center gap-[1rem]">
      <img src="@/assets/images/game-controller.png" />
      <h1 class="astro text-[2rem] font-medium text-[#FFFFFF] hidden md:flex gap-[0.3rem]">
        Astro <span class="astro text-[#EE0001] uppercase">Games</span>
      </h1>
    </div>
    <div class="flex">
      <SearchBar />
    </div>
    <div class="md:flex justify-between items-center gap-[1rem] hidden">
      <div class="w-12 h-12 rounded-[50%] bg-[#EE0001] grid place-content-center">
        <img src="@/assets/images/toppng.png" />
      </div>
      <i class="pi pi-shopping-cart text-[#EE0001]" style="font-size: 3rem"></i>
    </div>
    <Drawer class="md:hidden flex" />
  </div>
</template>

<style scoped>
.astro {
  font-family: 'Ubuntu';
  font-weight: 700;
}
</style>

<script setup>
import SearchBar from './SearchBar.vue'
import Drawer from './Drawer.vue'
</script>
