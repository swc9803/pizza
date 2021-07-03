<template>
  <div>
    <div class="mb-4">
      <Slide />
    </div>
    <div>
      <Description />
    </div>
    <div>
      <Test />
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide'
import Description from '@/components/Description'
import Test from '@/components/Test'
import { useRouter } from 'vue-router'

export default {
  components: {
    Slide,
    Description,
    Test
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
