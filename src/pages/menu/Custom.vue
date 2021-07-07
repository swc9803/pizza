<template>
  <div>
    <Menunavbar />
    <div class="margin mt-4">
      custom
      <div class="box"></div>
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
.margin {
  width: 80%;
  margin: auto;
}
.box {
  width: 100%;
  height: 500px;
  background: cyan;
}
</style>
