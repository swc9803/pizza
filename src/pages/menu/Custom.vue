<template>
  <div>
    <Menunavbar />
    <div>
      <transition name="fade" mode="out-in" />
    </div>
    <div class="margin mt-5">
      <img src="@/assets/menucustom.jpg" class="foundation">
      <div>
        <transition name="tfade">
          <img src="@/assets/option/토마토.png" v-if="Tomato" class="toppings" style="z-index: 2"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/올리브.png" v-if="Olive" class="toppings" style="z-index: 1"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/감자.png" v-if="Potato" class="toppings" style="z-index: 8"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/베이컨.png" v-if="Bacon" class="toppings" style="z-index: 5"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/양파.png" v-if="Onion" class="toppings" style="z-index: 9"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/버섯.png" v-if="Mushroom" class="toppings" style="z-index: 7"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/새우.png" v-if="Shrimp" class="toppings" style="z-index: 10"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/페퍼로니.png" v-if="Pepperoni" class="toppings" style="z-index: 3"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/피망.png" v-if="Pimento" class="toppings" style="z-index: 4"/>
        </transition>
        <transition name="tfade">
          <img src="@/assets/option/파인애플.png" v-if="Pineapple" class="toppings" style="z-index: 6"/>
        </transition>
      </div>
      <div class="flex mt-3">
        <img src="@/assets/topping/all.png" class="toggle" @click="Allon">
        <img src="@/assets/topping/tomato.png" class="toggle" @click="Addtom(), Tomato = !Tomato">
        <img src="@/assets/topping/olive.png" class="toggle" @click="Addoli(), Olive = !Olive">
        <img src="@/assets/topping/potato.png" class="toggle" @click="Addpot(), Potato = !Potato">
        <img src="@/assets/topping/bacon.png" class="toggle" @click="Addbac(), Bacon = !Bacon">
        <img src="@/assets/topping/onion.png" class="toggle" @click="Addoni(), Onion = !Onion">
        <img src="@/assets/topping/mushroom.png" class="toggle" @click="Addmus(), Mushroom = !Mushroom">
        <img src="@/assets/topping/shrimp.png" class="toggle" @click="Addshr(), Shrimp = !Shrimp">
        <img src="@/assets/topping/pepperoni.png" class="toggle" @click="Addpep(), Pepperoni = !Pepperoni">
        <img src="@/assets/topping/pimento.png" class="toggle" @click="Addpim(), Pimento = !Pimento">
        <img src="@/assets/topping/pineapple.png" class="toggle" @click="Addpin(), Pineapple = !Pineapple">
        <img src="@/assets/topping/cancel.png" class="toggle" @click="Alloff">
      </div>
    </div>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Tomatoalert">
        토마토 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Olivealert">
        올리브 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Potatoalert">
        감자 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Baconalert">
        베이컨 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Onionalert">
        양파 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Mushroomalert">
        버섯 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Shrimpalert">
        새우 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Pepperonialert">
        페퍼로니 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Pimentoalert">
        피망 추가
      </div>
    </transition>
    <transition name="Afade">
      <div class="alert alert-success" role="alert" v-if="Pineapplealert">
        파인애플 추가
      </div>
    </transition>
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
    const Tomatoalert = ref(false)
    const Olivealert = ref(false)
    const Potatoalert = ref(false)
    const Baconalert = ref(false)
    const Onionalert = ref(false)
    const Mushroomalert = ref(false)
    const Shrimpalert = ref(false)
    const Pepperonialert = ref(false)
    const Pimentoalert = ref(false)
    const Pineapplealert = ref(false)
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

    const Addtom = () => {
      if (Tomato.value === false) {
        Tomatoalert.value = true
        setTimeout(() => {
          Tomatoalert.value = false
        }, 1500)
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addoli = () => {
      if (Olive.value === false) {
        Olivealert.value = true
        setTimeout(() => {
          Olivealert.value = false
        }, 1500)
        Tomatoalert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addpot = () => {
      if (Potato.value === false) {
        Potatoalert.value = true
        setTimeout(() => {
          Potatoalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addbac = () => {
      if (Bacon.value === false) {
        Baconalert.value = true
        setTimeout(() => {
          Baconalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addoni = () => {
      if (Onion.value === false) {
        Onionalert.value = true
        setTimeout(() => {
          Onionalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addmus = () => {
      if (Mushroom.value === false) {
        Mushroomalert.value = true
        setTimeout(() => {
          Mushroomalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addshr = () => {
      if (Shrimp.value === false) {
        Shrimpalert.value = true
        setTimeout(() => {
          Shrimpalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addpep = () => {
      if (Pepperoni.value === false) {
        Pepperonialert.value = true
        setTimeout(() => {
          Pepperonialert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pimentoalert.value = false
        Pineapplealert.value = false
      }
    }
    const Addpim = () => {
      if (Pimento.value === false) {
        Pimentoalert.value = true
        setTimeout(() => {
          Pimentoalert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pineapplealert.value = false
      }
    }
    const Addpin = () => {
      if (Pineapple.value === false) {
        Pineapplealert.value = true
        setTimeout(() => {
          Pineapplealert.value = false
        }, 1500)
        Tomatoalert.value = false
        Olivealert.value = false
        Potatoalert.value = false
        Baconalert.value = false
        Onionalert.value = false
        Mushroomalert.value = false
        Shrimpalert.value = false
        Pepperonialert.value = false
        Pimentoalert.value = false
      }
    }

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
      Addtom,
      Addpot,
      Addoli,
      Addbac,
      Addoni,
      Addmus,
      Addshr,
      Addpep,
      Addpim,
      Addpin,
      Tomatoalert,
      Olivealert,
      Potatoalert,
      Baconalert,
      Onionalert,
      Mushroomalert,
      Shrimpalert,
      Pepperonialert,
      Pimentoalert,
      Pineapplealert,
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
  height: 680px;
  margin: auto;
}
.foundation {
  position: absolute;
  width: 40%;
  z-index: 0;
}
.toppings {
  position: absolute;
  width: 40%;
}
.toggle {
  width: 30%;
  margin: 10px;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 42%;
  float: right;
}
.alert {
  z-index: 6;
  top: 117px;
  position: fixed;
  right: 10%;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}
.tfade-enter-from,
.tfade-leave-to {
  opacity: 0;
}
.tfade-enter-active,
.tfade-leave-active {
  transition: opacity .3s
}

.Afade-enter-active,
.Afade-leave-active {
  transition: all 0.5s ease;
}
.Afade-enter-from,
.Afade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.Afade-enter-to,
.Afade-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
