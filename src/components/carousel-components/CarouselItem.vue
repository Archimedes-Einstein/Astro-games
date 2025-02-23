<template>
  <transition
    :name="transitionEffect"
    @mouseenter="$emit('mouseenter')"
    @mouseout="$emit('mouseout')"
  >
    <div class="carousel-items h-full" v-show="currentSlide === index">
      <img :src="slide" class="w-full h-full md:h-[100vh]" />
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['mouseenter', 'mouseout'])
const props = defineProps({
  slide: String,
  currentSlide: Number,
  index: Number,
  direction: {
    type: String,
    required: true,
  },
})
const transitionEffect = computed(() => {
  return props.direction === 'right' ? 'slide-out' : 'slide-in'
})
</script>
<style scoped>
.carousel-items {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
