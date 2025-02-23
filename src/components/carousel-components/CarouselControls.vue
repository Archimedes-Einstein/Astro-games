<template>
  <div class="controls-parent">
    <i
      class="carousel-controls pi pi-chevron-left left"
      style="font-size: 2rem"
      @click="$emit('prev')"
    ></i>
    <i
      class="carousel-controls pi pi-chevron-right right"
      style="font-size: 2rem"
      @click="$emit('next')"
    ></i>
  </div>
</template>
<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['prev', 'next'])
</script>
<style scoped>
.carousel-controls {
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #ee0001;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
@media (max-width: 767px) {
  .carousel-controls {
    top: calc(50% - 40px);
  }
}
</style>
