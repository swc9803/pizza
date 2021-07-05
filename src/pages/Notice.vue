<template>
  <div>
    <div class="click">
      <img src="@/assets/arrow.png" class="arrow" alt="arrow"><br>
      <p class="mt-1">그림을 클릭해보세요!</p>
    </div>
    notice
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
</style>
