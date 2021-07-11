<template>
<div v-if="Switch1" class="show"/>
<div v-if="Switch2" class="show"/>
<div class="switch" @click="allon"></div>switch all on
<div class="switch" @click="Switch1 = !Switch1">switch 1 on</div>
<div class="switch" @click="Switch2 = !Switch2">switch 2 on</div>
</template>

<script>
import { ref } from 'vue'

export default {
  // data: function () {
  //   return {
  //     Switch1: false,
  //     Switch2: false
  //   }
  // },
  setup () {
    const Switch1 = ref(false)
    const Switch2 = ref(false)
    const allon = () => {
      Switch1.value = true
      Switch2.value = true
    }
    return {
      Switch1,
      Switch2,
      allon
    }
  }
}
</script>

<style>
.show {
  width: 200px;
  height: 200px;
  background: red
}
.switch {
  width: 200px;
  height: 200px;
  background: cyan;
}
</style>
