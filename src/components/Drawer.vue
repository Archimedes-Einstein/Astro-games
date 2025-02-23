<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="visibleRight" header="Right Drawer" position="right">
      <div class="flex justify-between items-center">
        <div class="grid place-content-center w-13 h-13 rounded-[50%] bg-[#ee0001] m-4">
          <img src="@/assets/images/toppng.png" alt="" />
        </div>
        <p class="text">User Account</p>
      </div>
      <div class="flex justify-between items-center w-full mt-[5rem]">
        <i class="pi pi-shopping-cart text-[#EE0001]" style="font-size: 3rem"></i>
        <p class="text">Add to cart</p>
      </div>
    </Drawer>
    <div class="w-[2.9rem] h-[2.9rem] bg-[#ee0001] rounded-[50%] grid place-content-center">
      <Button class="pi pi-bars" style="color: black" @click="visibleRight = true" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visibleRight = ref(false)
</script>
<style scoped>
.text {
  font-family: 'Ubuntu';
  font-weight: 500;
}
</style>
