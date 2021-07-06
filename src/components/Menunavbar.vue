<template>
  <div>
    <h2 style="color: cyan; width: 65%; margin: auto;">메뉴</h2>
    <hr>
    <div class="menuflex">
      <div/>
      <router-link :to="{ name: 'Pizza'}" style="color: yellow; text-decoration: none">
        피자
      </router-link>
      |
      <router-link :to="{ name: 'Noodle'}" style="color: yellow; text-decoration: none">
        면
      </router-link>
      |
      <router-link :to="{ name: 'Side'}" style="color: yellow; text-decoration: none">
        사이드 메뉴
      </router-link>
      |
      <router-link :to="{ name: 'Custom'}" style="color: yellow; text-decoration: none">
        커스텀 피자
      </router-link>
      <div/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a.router-link-active {
  border: 2px solid yellow;
  padding: 10px;
  background: rgb(40, 40, 40);
}
.menuflex {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 10px auto;
  align-items: center;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
</style>
