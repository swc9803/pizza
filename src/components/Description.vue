<template>
  <div class="description">
    <hr>
    <div style="text-align: center">
      <br><b>The best pizza restaurant in the world</b>
    </div>
    <img src="@/assets/pizza.png" class="back mt-5" alt="pizza">
    <div class="hov mt-4">
      <div/><div class="adjust">
        <img src="@/assets/produce.png" class="before1" alt="produce">
        <img src="@/assets/domestic.png" class="after" alt="domestic">
        <p class="text">Domestic<br>Ingredients</p>
      </div>
      <div class="adjust">
        <img src="@/assets/cheap.png" class="before2" alt="cheap">
        <img src="@/assets/money.png" class="after" alt="money">
        <p class="text">Reasonable<br>Price</p>
      </div>
      <div class="adjust">
        <img src="@/assets/mask.png" class="before3" alt="mask">
        <img src="@/assets/safety.png" class="after" alt="safety">
        <p class="text">Safety<br>Commitment</p>
      </div><div/>
    </div>
    <div class="click">
      <img src="@/assets/arrow.png" class="arrow" alt="arrow">
      <p class="mt-1">그림을 클릭해보세요!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.click {
  text-align: center;
}
.hov {
  display: flex;
  justify-content: space-around;
}
.description {
  height: 3000px;
  background: rgb(50, 50, 50);
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
  -webkit-animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
  animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
}
.before2 {
  width: 14%;
  position: absolute;
  -webkit-animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5 both;
  animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both;
}
.before3 {
  width: 14%;
  position: absolute;
  -webkit-animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8 both;
  animation: before 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.8s both;
}
@-webkit-keyframes before {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes before {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
.after {
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
.arrow {
  width: 2%;
  animation-name: bounce;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
}
@keyframes bounce{
  0%, 100%{
    margin-top: 0px;
    animation-timing-function: ease-out;
  }
  50%{
    margin-top: 15px;
    animation-timing-function: ease-in;
  }
}
.text {
  font-size: 2.8vw;
  color: #D3B057;
}
p {
  color: #D3B057;
  position: relative;
  top: 150%;
}
</style>
