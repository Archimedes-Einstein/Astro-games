<template>
  <div class="carousel-indicators">
    <button
      :class="{ active: currentIndex === index }"
      class="carousel-indicator-item"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['switch'])
// eslint-disable-next-line no-unused-vars
const props = defineProps(['total', 'currentIndex'])
</script>
<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 2rem;
  z-index: 100;
}
.carousel-indicator-item {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: white;
  border: none;
  margin: 0.8rem;
  opacity: 0.5;
  cursor: pointer;
}
.active {
  border: 1px solid #fff;
  opacity: 1;
  background: none;
  transform: scale(2);
}
@media (min-width: 767px) {
  .carousel-indicators {
    bottom: 2rem;
    z-index: 100;
  }
}
</style>
