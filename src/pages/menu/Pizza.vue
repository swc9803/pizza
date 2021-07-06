<template>
  <div>
    <Menunavbar />
    <div class="flex mt-4">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/menupizza.jpg" class="box" alt="menupizza">
      <img src="@/assets/custom.jpg" class="box" @click="moveToCustom" style="cursor: pointer" alt="custom">
    </div>
    <div class="right">
      <div class="click">
        <img src="@/assets/arrow.png" class="arrow" alt="arrow"><br>
        <p class="mt-1">자신만의 피자를<br>만들어보세요!</p>
      </div>
    </div>
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
.right {
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}
.click {
  text-align: center;
}
.arrow {
  width: 20%;
  animation-name: bounce;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
}
@keyframes bounce{
  0%, 100%{
    margin-top: 0px;
    animation-timing-function: ease-out;
  }
  50%{
    margin-top: 15px;
    animation-timing-function: ease-in;
  }
}
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
  margin: 20px;
  border-radius: 20px;
}
</style>
