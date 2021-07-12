<template>
  <div>
    <Menunavbar />
    <div class="margin mt-5">
      <img src="@/assets/menucustom.jpg" class="foundation">
      <div>
        <transition name="fade">
          <img src="@/assets/option/토마토.png" v-if="Tomato" class="toppings" style="z-index: 2"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/올리브.png" v-if="Olive" class="toppings" style="z-index: 1"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/감자.png" v-if="Potato" class="toppings" style="z-index: 8"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/베이컨.png" v-if="Bacon" class="toppings" style="z-index: 5"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/양파.png" v-if="Onion" class="toppings" style="z-index: 9"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/버섯.png" v-if="Mushroom" class="toppings" style="z-index: 7"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/새우.png" v-if="Shrimp" class="toppings" style="z-index: 10"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/페퍼로니.png" v-if="Pepperoni" class="toppings" style="z-index: 3"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/피망.png" v-if="Pimento" class="toppings" style="z-index: 4"/>
        </transition>
        <transition name="fade">
          <img src="@/assets/option/파인애플.png" v-if="Pineapple" class="toppings" style="z-index: 6"/>
        </transition>
      </div>
      <div class="flex mt-3">
        <img src="@/assets/topping/all.png" class="toggle" @click="Allon">
        <img src="@/assets/topping/tomato.png" class="toggle" @click="Tomato = !Tomato">
        <img src="@/assets/topping/olive.png" class="toggle" @click="Olive = !Olive">
        <img src="@/assets/topping/potato.png" class="toggle" @click="Potato = !Potato">
        <img src="@/assets/topping/bacon.png" class="toggle" @click="Bacon = !Bacon">
        <img src="@/assets/topping/onion.png" class="toggle" @click="Onion = !Onion">
        <img src="@/assets/topping/mushroom.png" class="toggle" @click="Mushroom = !Mushroom">
        <img src="@/assets/topping/shrimp.png" class="toggle" @click="Shrimp = !Shrimp">
        <img src="@/assets/topping/pepperoni.png" class="toggle" @click="Pepperoni = !Pepperoni">
        <img src="@/assets/topping/pimento.png" class="toggle" @click="Pimento = !Pimento">
        <img src="@/assets/topping/pineapple.png" class="toggle" @click="Pineapple = !Pineapple">
        <img src="@/assets/topping/cancel.png" class="toggle" @click="Alloff">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Menunavbar from '@/components/Menunavbar'

export default {
  components: {
    Menunavbar
  },
  setup () {
    const Tomato = ref(false)
    const Olive = ref(false)
    const Potato = ref(false)
    const Bacon = ref(false)
    const Onion = ref(false)
    const Mushroom = ref(false)
    const Shrimp = ref(false)
    const Pepperoni = ref(false)
    const Pimento = ref(false)
    const Pineapple = ref(false)

    const Allon = () => {
      Tomato.value = true
      Olive.value = true
      Potato.value = true
      Bacon.value = true
      Onion.value = true
      Mushroom.value = true
      Shrimp.value = true
      Pepperoni.value = true
      Pimento.value = true
      Pineapple.value = true
    }
    const Alloff = () => {
      Tomato.value = false
      Olive.value = false
      Potato.value = false
      Bacon.value = false
      Onion.value = false
      Mushroom.value = false
      Shrimp.value = false
      Pepperoni.value = false
      Pimento.value = false
      Pineapple.value = false
    }

    return {
      Allon,
      Alloff,
      Tomato,
      Olive,
      Potato,
      Bacon,
      Onion,
      Mushroom,
      Shrimp,
      Pepperoni,
      Pimento,
      Pineapple
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
  width: 45%;
  z-index: 0;
}
.toppings {
  position: absolute;
  width: 45%;
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
