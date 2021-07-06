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
      <img src="@/assets/custom.jpg" class="box" @click="moveToCustom" style="cursor: pointer" alt="custom">
    </div>
    <span style="float: right; posistion: absolute">dd</span>
  </div>
</template>

<script>
import Menunavbar from '@/components/Menunavbar'
import { useRouter } from 'vue-router'

export default {
  components: {
    Menunavbar
  },
  setup () {
    const router = useRouter()
    const moveToCustom = () => {
      router.push({
        name: 'Custom'
      })
    }
    return {
      moveToCustom
    }
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
  /* position: relative; */
}
.box {
  flex: auto;
  width: 300px;
  margin: 20px;
  border-radius: 20px;
}
</style>
