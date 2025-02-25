<template>
  <div class="flex justify-center font-[sans-serif] gap-[2rem] flex-col h-[100%]">
    <div class="flex items-center md:justify-start justify-center">
      <h1 class="text-[#ffffff] text-[2rem] md:text-[3rem] md:pl-[16%] pt-[2rem]">BESTSELLER</h1>
    </div>
    <div class="flex justify-center items-center">
      <ContentSlider />
    </div>
    <div class="flex items-center md:justify-start justify-center">
      <h1 class="text-[#ffffff] text-[2rem] md:text-[3rem] md:pl-[16%]">WATCH TRAILERS</h1>
    </div>
    <Trailer />
    <div class="flex justify-center items-center">
      <GameDataTable />
    </div>
  </div>
</template>

<script setup>
import ContentSlider from './ContentSlider.vue'
import GameDataTable from './GameDataTable.vue'
import Trailer from './Trailer.vue'
</script>

<style scoped>
h1 {
  font-family: 'Rubik';
  font-weight: 700;
  color: #ffffff;
}
</style>
