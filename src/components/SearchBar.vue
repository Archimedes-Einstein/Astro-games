<template>
  <div class="flex">
    <div class="flex relative">
      <div
        class="search-icon w-[2.5rem] h-[2.5rem] rounded-[50%] bg-[#463d3d] absolute grid place-content-center"
        @click="ToggleBar"
      >
        <i class="text-[#262626] pi pi-search" style="font-size: 1rem"></i>
      </div>
      <div class="search-parent">
        <input
          class="search-bar bg-[#5E5454] hidden md:flex md:w-[20rem] lg:w-[28rem] md:h-[2.5rem] rounded-[20px] border-none pl-[2.8rem] text-[#262626]"
          placeholder="Search Games ..."
        />
      </div>
    </div>
    <input
      v-if="showBar"
      class="bg-[#5E5454] flex md:hidden w-full h-[3rem] rounded-[20px] border-none pl-[2.8rem] text-[#262626]"
      :class="{ show: showBar }"
      placeholder="Search Games ..."
    />
  </div>
</template>
<style scoped>
.search-bar,
.show {
  outline: none;
}

.show {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(5% - 281px);
  height: 3rem;
  transform: translateY(20rem);
  z-index: 100;
}
.search-icon {
  top: 50%;
  left: 0.1%;
  transform: translateY(-20px);
}
input::placeholder {
  color: #262626;
  width: 150px;
  height: 24px;
}
@media (min-width: 765px) {
  .show {
    display: none;
  }
}
</style>
<script setup>
import { ref } from 'vue'
const showBar = ref(false)
const ToggleBar = () => {
  showBar.value = !showBar.value
}
</script>
