<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselIndicators
        :total="slides.length"
        :currentIndex="currentSlide"
        @switch="switchSlide($event)"
        v-if="indicators"
      ></CarouselIndicators>
      <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="index"
        :currentSlide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      />
      <CarouselControls @prev="prev" @next="next" v-if="controls" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CarouselItem from './CarouselItem.vue'
import CarouselControls from './CarouselControls.vue'
import CarouselIndicators from './CarouselIndicators.vue'
import { onMounted } from 'vue'
import { onBeforeUnmount } from 'vue'
import { defineProps } from 'vue'
const handleSwitchTabs = () => {
  if (document.visibilityState === 'hidden') {
    stopSlideTimer()
  } else {
    startSlideTimer()
  }
}

const handleClosedTabs = (event) => {
  event.preventDefault()
  stopSlideTimer()
  event.returnValue = ''
}
const props = defineProps({
  controls: {
    type: Boolean,
    required: false,
  },
  indicators: {
    type: Boolean,
    default: false,
  },
  interval: {
    type: Number,
    default: 3000,
  },
})
const currentSlide = ref(0)
const slideInterval = ref(null)
const direction = ref('right')
function setCurrentSlide(index) {
  currentSlide.value = index
}
const prev = (step = -1) => {
  const index = currentSlide.value > 0 ? currentSlide.value + step : slides.value.length - 1
  setCurrentSlide(index)
  direction.value = 'left'
  startSlideTimer()
}
const _next = (step = 1) => {
  const index = currentSlide.value < slides.value.length - 1 ? currentSlide.value + step : 0
  setCurrentSlide(index)
  direction.value = 'right'
}
const next = (step = 1) => {
  _next(step)
  startSlideTimer()
}
const startSlideTimer = () => {
  stopSlideTimer()
  slideInterval.value = setInterval(() => {
    _next()
  }, props.interval)
}
const stopSlideTimer = () => {
  clearInterval(slideInterval.value)
}
const switchSlide = (index) => {
  stopSlideTimer()
  const step = index - currentSlide.value
  if (step > 0) {
    next(step)
  } else if (step === 0 && step === -2) {
    next(step)
  } else {
    prev(step)
  }
}
onMounted(() => {
  startSlideTimer()
  document.addEventListener('visibilitychange', handleSwitchTabs)
  window.addEventListener('beforeunload', handleClosedTabs)
})
onBeforeUnmount(() => {
  stopSlideTimer()
  document.removeEventListener('visibilitychange', handleSwitchTabs)
  window.removeEventListener('beforeunload', handleClosedTabs)
})
// Relative paths
const slides = ref([
  '/src/assets/images/img(1).png',
  '/src/assets/images/img(2).png',
  '/src/assets/images/img(3).png',
])
</script>
<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
  width: 100%;
  height: 45rem;
  overflow: hidden;
}
@media (max-width: 767px) {
  .carousel-inner {
    height: 50vh;
  }
}
</style>
