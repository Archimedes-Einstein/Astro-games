<template>
  <table class="flex gap-[2rem] justify-center items-start">
    <table>
      <thead>
        <tr class="flex justify-around items-center gap-[2.4rem]">
          <th class="flex justify-content-between items-center gap-[1rem]">
            <h1 class="text-[3rem] text-[#cfcaca] font-[500]">New Release</h1>
            <button
              role="button"
              class="w-[5.2rem] h-[3.3rem] rounded-md border-[#EE0001] border-[2px] text-[#cfcaca] underline"
            >
              View More
            </button>
          </th>
        </tr>
      </thead>
      <tbody class="flex flex-col gap-2">
        <tr v-for="(img, index) in newRelease" :key="index" class="">
          <td class="flex items-center gap-2">
            <img :src="img.id" />
            <div class="w-[10rem]">
              <h2 class="text-[1.5rem] text-[#FFFFFF] font-[500]">{{ img.title }}</h2>
              <p class="text-[1rem] text-[#cfcaca] font-[100]">${{ img.price }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="border-l-2 border-[#AEA1A1]">
      <thead>
        <tr class="flex justify-around items-center gap-[2.4rem] pl-[1rem]">
          <th class="flex justify-content-between items-center gap-[1rem]">
            <h1 class="text-[3rem] text-[#cfcaca] font-[500]">Free Games</h1>
            <button
              role="button"
              class="w-[5.2rem] h-[3.3rem] rounded-md border-[#EE0001] border-solid border-[2px] text-[#cfcaca] underline"
            >
              View More
            </button>
          </th>
        </tr>
      </thead>
      <tbody class="flex flex-col gap-2 pl-[1rem]">
        <tr v-for="(img, index) in freeGames" :key="index" class="">
          <td class="flex items-center gap-2">
            <img :src="img.id" />
            <div class="w-[10rem]">
              <h2 class="text-[1.5rem] text-[#FFFFFF] font-[500]">{{ img.title }}</h2>
              <p class="text-[1rem] text-[#cfcaca] font-[100]">{{ img.price }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="border-l-2 border-[#AEA1A1]">
      <thead>
        <tr class="flex justify-around items-center gap-[2.4rem] pl-[1rem]">
          <th class="flex justify-content-between items-center gap-[1rem]">
            <h1 class="text-[3rem] text-[#cfcaca] font-[500]">Coming Soon</h1>
            <button
              role="button"
              class="w-[5.2rem] h-[3.3rem] rounded-md border-[#EE0001] border-solid border-[2px] text-[#cfcaca] underline"
            >
              View More
            </button>
          </th>
        </tr>
      </thead>
      <tbody class="flex flex-col gap-2 pl-[1rem]">
        <tr v-for="(img, index) in comingSoon" :key="index" class="">
          <td class="flex items-center gap-2">
            <img :src="img.id" />
            <div class="w-[10rem]">
              <h2 class="text-[1.5rem] text-[#FFFFFF] font-[500]">{{ img.title }}</h2>
              <p class="text-[1rem] text-[#cfcaca] font-[100]" v-if="img.price">{{ img.price }}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </table>
</template>

<style scoped>
h2,
h1 {
  font-family: 'Rubik';
}
/* .table-items {
  border-left: 3px solid #aea1a1;
  border-radius: 2px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}
.table-items:nth-child(3n-2) {
  border: none;
} */
</style>
<script setup>
import { ref, computed } from 'vue'

const tableData = ref([
  {
    id: '/src/assets/images/table-img/image4.png',
    title: 'Lego Star Wars Skywalker',
    price: 23.0,
  },
  { id: '/src/assets/images/table-img/image5.png', title: 'Ghost Wire Tokyo', price: 20.9 },
  { id: '/src/assets/images/table-img/image6.png', title: 'SIFU', price: 'Coming Soon' },
  {
    id: '/src/assets/images/table-img/image7.png',
    title: 'Horizon: Forbitten West',
    price: 2.39,
  },
  { id: '/src/assets/images/table-img/image8.png', title: 'Dota 2', price: 'Free' },
  { id: '/src/assets/images/table-img/image9.png', title: 'Fortnite', price: 3.5 },
  { id: '/src/assets/images/table-img/image10.png', title: 'Apex Legends', price: 'Free' },
  { id: '/src/assets/images/table-img/image11.png', title: 'Valorant', price: 'Free' },
  {
    id: '/src/assets/images/table-img/image12.png',
    title: 'Evil Dead The Game',
    price: 'Free',
  },
  { id: '/src/assets/images/table-img/image13.png', title: 'Gotham Knights', price: 'Coming Soon' },
  {
    id: '/src/assets/images/table-img/image14.png',
    title: 'Hogwarts Legacy',
    price: 'Coming Soon',
  },
  {
    id: '/src/assets/images/table-img/image15.png',
    title: 'God of War: RAGNAROK',
    price: 'Coming Soon',
  },
])
const newRelease = computed(() => {
  return tableData.value.filter((item) => item.price > 0)
})
const freeGames = computed(() => {
  return tableData.value.filter((item) => item.price === 'Free')
})
const comingSoon = computed(() => {
  return tableData.value.filter((item) => item.price === 'Coming Soon')
})
</script>
