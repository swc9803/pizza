<template>
  <div>
    <div class="mb-4">
      <Slide />
    </div>
    <div>
      <Description />
    </div>
    <div style="background: rgb(40, 40, 40);#2c2c2c">
      <Menu />
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide'
import Description from '@/components/Description'
import Menu from '@/components/Menu'
import { useRouter } from 'vue-router'

export default {
  components: {
    Slide,
    Description,
    Menu
  },
  setup () {
    const router = useRouter()
    const moveToMenu = () => {
      router.push({
        name: 'Pizza'
      })
    }
    return {
      moveToMenu
    }
  }
}
</script>

<style scoped>

</style>
