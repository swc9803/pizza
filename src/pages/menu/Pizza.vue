<template>
  <div>
    메뉴 <br> 피자 / 파스타 / 사이드 트렌지션
    <div class="flex">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <span class="box des"><br> dd dd</span>
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <img src="@/assets/치즈피자.jpg" class="box" alt="치즈피자">
      <div class="box">이미지 넣고 글씨만 absolute</div>
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
</style>
