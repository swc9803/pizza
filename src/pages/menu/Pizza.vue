<template>
  <div>
    <Menunavbar />
    <div class="flex">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/custom.jpg" class="box" alt="custom">
    </div>
  </div>
</template>

<script>
import Menunavbar from '@/components/Menunavbar'

export default {
  components: {
    Menunavbar
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}
.box {
  flex: auto;
  width: 300px;
  height: 300px;
  margin: 20px;
  border-radius: 20px;
}
</style>
