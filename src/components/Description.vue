<template>
  <div class="description">
    <hr>
    <br><b>The best pizza restaurant in the world</b>
    <img src="@/assets/pizza.png" class="back mt-5" alt="pizza">
    <div>
      <img src="@/assets/produce.png" class="adjust" alt="produce">
      <img src="@/assets/domestic.png" class="hide" alt="domestic">
      <p>Domestic<br>Ingredients</p>
    </div>
    <div>
      <img src="@/assets/cheap.png" class="adjust" alt="cheap">
      <img src="@/assets/money.png" class="hide" alt="money">
      <p>Reasonable<br>Price</p>
    </div>
    <div>
      <img src="@/assets/mask.png" class="adjust" alt="mask">
      <img src="@/assets/safety.png" class="hide" alt="safety">
      <p>Safety<br>Commitment</p>
    </div>
    <div>
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
.description {
  height: 3000px;
  background: rgb(50, 50, 50);
  text-align: center;
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
.adjust {
  border-radius: 70%;
  width: 14%;
  position: absolute;
}
.hide {
  border-radius: 70%;
  width: 14%;
  position: relative;
  opacity: 0;
  transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
}
.hide:hover {
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
p {
  color: #D3B057;
}
</style>
