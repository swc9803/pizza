<template>
  <div>
    <Menunavbar />
    <div class="flex mt-4">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
      <img src="@/assets/side.jpg" class="box" alt="side">
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
