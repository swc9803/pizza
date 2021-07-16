<template>
  <div>
    <Menunavbar />
    <div>
      <transition name="fade" mode="out-in" />
    </div>
    <div class="flex mt-4">
      <img src="@/assets/menupizza.png" class="box" alt="menupizza">
      <img src="@/assets/menupizza.png" class="box" alt="menupizza">
      <img src="@/assets/menupizza.png" class="box" alt="menupizza">
      <img src="@/assets/menupizza.png" class="box" alt="menupizza">
      <img src="@/assets/menupizza.png" class="box" alt="menupizza">
      <img src="@/assets/custom.jpg" class="box" @click="moveToCustom" style="cursor: pointer" alt="custom">
    </div>
    <div class="flex" style="height: 180px">
      <div class="box"/>
      <div class="box"/>
      <div class="box"/>
      <div class="box"/>
      <div class="box"/>
      <div class="click box">
        <img src="@/assets/arrow.png" class="arrow" @click="moveToCustom" alt="arrow"><br>
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
.click {
  text-align: center;
  position: relative;
  top: -60px;
}
.arrow {
  width: 7%;
  animation-name: bounce;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  cursor: pointer;
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
  width: 341px;
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
