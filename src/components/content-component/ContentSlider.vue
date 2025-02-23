<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'

const items = ref([
  { id: 1, image: '/src/assets/images/card(1).png', price: 23.46, title: 'God of War' },
  { id: 2, image: '/src/assets/images/card(2).png', price: 24.23, title: 'Marvel Spider-Man' },
  { id: 3, image: '/src/assets/images/card(3).png', price: 22.62, title: 'Red Dead Redemption II' },
])

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1,
  },
])
</script>

<template>
  <div class="card">
    <Carousel
      :value="items"
      :numVisible="3"
      :numScroll="3"
      :responsiveOptions="responsiveOptions"
      :circular="false"
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="surface-border border-round m-2 p-3">
          <div class="mb-3">
            <img :src="slotProps.data.image" class="w-full border-round h-[25rem] md:h-[30rem]" />
          </div>
          <div
            class="w-full bg-[#AD2B2B] rounded-b-[1.5rem] flex justify-start pl-2 flex flex-col justify-center"
          >
            <h4 style="font-family: 'Rubik'; color: #ffffff" class="text-[1rem] md:text-[1.8rem]">
              {{ slotProps.data.title }}
            </h4>
            <h4 style="font-family: 'Rubik'; color: #262626" class="text-[1rem] md:text-[1.8rem]">
              ${{ slotProps.data.price }}
            </h4>
          </div>
        </div>
      </template>
      <template #previousicon="props">
        <i class="pi pi-chevron-left" :class="props.iconClass"></i>
      </template>

      <template #nexticon="props">
        <i class="pi pi-chevron-right" :class="props.iconClass"></i>
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
:deep(.p-carousel .p-carousel-indicators .p-link) {
  --arrow-color: #ee0001 !important; /* Blue color */

  color: var(--arrow-color) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  border: 2px solid var(--arrow-color) !important;
  border-radius: 50%;
  width: 40px !important;
  height: 40px !important;
}

:deep(.p-carousel .p-carousel-indicators .p-link svg) {
  fill: var(--arrow-color) !important;
  stroke: var(--arrow-color) !important;
  stroke-width: 2px !important;
  width: 24px !important;
  height: 24px !important;
}

::v-deep(.p-carousel-indicators) {
  gap: 0.5rem;
}
</style>
