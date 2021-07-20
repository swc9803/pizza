<template>
  <div class="description">
    <hr>
    <div style="text-align: center">
      <br><b>The best pizza restaurant in the world</b>
    </div>
    <div class="fixed mt-5" />
    <div class="hov mt-5">
      <div/><div class="adjust">
        <img src="@/assets/produce.png" class="before1" alt="produce">
        <img src="@/assets/domestic.png" class="after" alt="domestic" @click="change1">
        <p>Domestic<br>Ingredients</p>
      </div>
      <div class="adjust">
        <img src="@/assets/cheap.png" class="before2" alt="cheap">
        <img src="@/assets/money.png" class="after" alt="money" @click="change2">
        <p>Reasonable<br>Price</p>
      </div>
      <div class="adjust">
        <img src="@/assets/mask.png" class="before3" alt="mask">
        <img src="@/assets/safety.png" class="after" alt="safety" @click="change3">
        <p>Safety<br>Commitment</p>
      </div><div/>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  setup () {
    const change1 = () => {
      document.querySelector('.fixed, .fixed2, .fixed3').className = 'fixed1 mt-5'
    }
    const change2 = () => {
      document.querySelector('.fixed, .fixed1, .fixed3').className = 'fixed2 mt-5'
    }
    const change3 = () => {
      document.querySelector('.fixed, .fixed1, .fixed2').className = 'fixed3 mt-5'
    }
    onMounted(() => {
      gsap.from('.before1', {
        scrollTrigger: {
          trigger: '.before1',
          toggleActions: 'restart none reverse none'
        },
        y: 500,
        opacity: 0,
        duration: 1
      })
      gsap.from('.before2', {
        scrollTrigger: {
          trigger: '.before2',
          toggleActions: 'restart none reverse none'
        },
        y: 500,
        opacity: 0,
        duration: 1,
        delay: 0.3
      })
      gsap.from('.before3', {
        scrollTrigger: {
          trigger: '.before3',
          toggleActions: 'restart none reverse none'
        },
        y: 500,
        opacity: 0,
        duration: 1,
        delay: 0.6
      })
    })
    return {
      change1, change2, change3
    }
  }
}
</script>

<style scoped>
.description {
  height: 1200px;
}
.fixed {
  width: 100%;
  height: 40%;
  background-image: url('~@/assets/pizza.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.fixed1 {
  width: 100%;
  height: 40%;
  background-image: url('~@/assets/pizza1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.fixed2 {
  width: 100%;
  height: 40%;
  background-image: url('~@/assets/pizza2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.fixed3 {
  width: 100%;
  height: 40%;
  background-image: url('~@/assets/pizza3.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.hov {
  display: flex;
  justify-content: space-around;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
b {
  font-size: 40px;
  color: #de1e1f
}
.back {
  width: 100%;
}
.before1 {
  width: 14%;
  position: absolute;
  opacity: 1;
}
.before2 {
  width: 14%;
  position: absolute;
  opacity: 1;
}
.before3 {
  width: 14%;
  position: absolute;
  opacity: 1;
}
.after {
  cursor: pointer;
  border-radius: 70%;
  width: 14%;
  position: absolute;
  opacity: 0;
  transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
}
.after:hover {
  border-radius: 70%;
  width: 14%;
  background: rgb(0, 0, 0, 0.6);
  opacity: 1;
}
p {
  font-size: 2.8vw;
  color: #D3B057;
  position: relative;
  top: 150%;
}
</style>
