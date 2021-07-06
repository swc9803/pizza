<template>
  <div>
    <p style="width: 70%; margin: auto;">Menu</p>
    <hr>
    <div class="menuflex">
      <router-link :to="{ name: 'Pizza'}">
        피자
      </router-link>
      <router-link :to="{ name: 'Noodle'}">
        면
      </router-link>
      <router-link :to="{ name: 'Side'}">
        사이드 메뉴
      </router-link>
      <router-link :to="{ name: 'Custom'}">
        커스텀 피자
      </router-link>
    </div>
    <div class="flex">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <span class="box des"><br> dd dd</span>
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/custom.jpg" class="box" alt="custom">
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.des {
  position: absolute;
}
.menuflex {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 10px auto;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}
.box {
  flex: auto;
  width: 300px;
  height: 300px;
  margin: 20px;
  border-radius: 20px;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
</style>
