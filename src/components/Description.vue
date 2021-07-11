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
        <img src="@/assets/domestic.png" class="after" alt="domestic">
        <p>Domestic<br>Ingredients</p>
      </div>
      <div class="adjust">
        <img src="@/assets/cheap.png" class="before2" alt="cheap">
        <img src="@/assets/money.png" class="after" alt="money">
        <p>Reasonable<br>Price</p>
      </div>
      <div class="adjust">
        <img src="@/assets/mask.png" class="before3" alt="mask">
        <img src="@/assets/safety.png" class="after" alt="safety">
        <p>Safety<br>Commitment</p>
      </div><div/>
    </div>
  </div>
</template>

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
p {
  font-size: 2.8vw;
  color: #D3B057;
  position: relative;
  top: 150%;
}
</style>
