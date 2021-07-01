<template>
  <div>
    <Slide />
    <div class="goMenu mt-4" @click="moveToMenu">
      메뉴 보러 가기
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide'
import { useRouter } from 'vue-router'

export default {
  components: {
    Slide
  },
  setup () {
    const router = useRouter()
    const moveToMenu = () => {
      router.push({
        name: 'Rise'
      })
    }
    return {
      moveToMenu
    }
  }
}
</script>

<style scoped>
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
  width: 270px;
  cursor: pointer;
}
.goMenu:hover {
  color: #fff;
  border: 1px solid rgba(223,190,106,0);
  color: white;
  background-position: 99% 50%;
}
</style>
