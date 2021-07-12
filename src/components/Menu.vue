<template>
  <div style="background: rgb(42,42,42);">
    <hr>
    <div class="mt-5" style="text-align: center">
      <br><b>직접 만드는 나만의 피자</b><br><br>
    <img src="@/assets/커스텀예시.png" style="width: 80%">
    </div>
    <div class="goMenu mt-4" @click="moveToCustom">
      피자 만들러 가기
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
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
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
b {
  font-size: 30px;
  color: #ff0055
}
.goMenu {
  color: rgba(223,190,106,0.7);
  border-radius: 50px;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223,190,106,0.8), rgba(146,111,52,0.8), rgba(34,34,34,0), rgba(34,34,34,0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  border: 1px solid rgba(223,190,106,0.3);
  margin: auto;
  display: block;
  text-align: center;
  width: 283px;
  cursor: pointer;
}
.goMenu:hover {
  color: #fff;
  border: 1px solid rgba(223,190,106,0);
  color: white;
  background-position: 99% 50%;
}
</style>
