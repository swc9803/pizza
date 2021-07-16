<template>
  <div>
    <Menunavbar />
    <div>
      <transition name="fade" mode="out-in" />
    </div>
    <div class="flex mt-4">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
      <img src="@/assets/menupasta.jpg" class="box" alt="menupasta">
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
  width: 265px;
  margin: 20px;
  border-radius: 20px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
</style>
