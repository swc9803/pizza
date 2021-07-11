<template>
  <div>
    <Menunavbar />
    <div class="margin mt-5">
      <img src="@/assets/menucustom.jpg" class="foundation">
      <div>
        <transition name="fade">
          <Tomato v-if="Tomato" class="toppings" style="z-index: 1"/>
        </transition>
        <transition name="fade">
          <Olive v-if="Olive" class="toppings" style="z-index: 2"/>
        </transition>
        <transition name="fade">
          <Potato v-if="Potato" class="toppings" style="z-index: 3"/>
        </transition>
      </div>
      <div class="flex mt-3">
        <img src="@/assets/topping/all.png" class="toggle" @click="Allon">
        <img src="@/assets/topping/tomato.png" class="toggle" @click="Tomato = !Tomato">
        <img src="@/assets/topping/olive.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/potato.png" class="toggle" @click="Potato = !Potato">
        <img src="@/assets/topping/bacon.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/onion.png" class="toggle" @click="Tomato = !Tomato">
        <img src="@/assets/topping/mushroom.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/shrimp.png" class="toggle" @click="Tomato = !Tomato">
        <img src="@/assets/topping/pepperoni.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/pimento.png" class="toggle" @click="Tomato = !Tomato">
        <img src="@/assets/topping/pineapple.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/cancel.png" class="toggle" @click="Alloff">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Menunavbar from '@/components/Menunavbar'
import Tomato from '@/components/toppings/Tomato'
import Olive from '@/components/toppings/Olive'
import Potato from '@/components/toppings/Potato'

export default {
  components: {
    Menunavbar,
    Tomato,
    Olive,
    Potato
  },
  setup () {
    const Tomato = ref(false)
    const Olive = ref(false)
    const Potato = ref(false)

    const Allon = () => {
      Tomato.value = true
      Olive.value = true
      Potato.value = true
    }
    const Alloff = () => {
      Tomato.value = false
      Olive.value = false
      Potato.value = false
    }

    return {
      Allon,
      Alloff,
      Tomato,
      Olive,
      Potato
    }
  }
}
</script>

<style scoped>
.margin {
  width: 80%;
  height: 800px;
  margin: auto;
}
.foundation {
  position: absolute;
  width: 40%;
  z-index: 0;
}
.toppings {
  position: absolute;
  width: 761.2px;
  height: 761.2px;
}
.toggle {
  width: 165px;
  height: 130px;
  margin: 10px;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40%;
  float: right;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}
</style>
