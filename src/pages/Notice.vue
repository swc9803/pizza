<template>
  <div>
    신메뉴
    <div class="click">
      <img src="@/assets/arrow.png" class="arrow" alt="arrow"><br>
      <p class="mt-1">자신만의 피자를<br>만들어보세요!</p>
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
    margin-right: 0px;
    animation-timing-function: ease-out;
  }
  50%{
    margin-right: 15px;
    animation-timing-function: ease-in;
  }
}
</style>
