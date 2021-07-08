<template>
  <div>
    <Menunavbar />
    <div class="margin mt-5">
      <div class="check">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label>치즈 추가</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>올리브</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>웨지감자</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>베이컨</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>양파</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>버섯</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>새우</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>페퍼로니</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>피망</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>가지</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox">
          <label>파인애플</label>
        </div>
      </div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
import Menunavbar from '@/components/Menunavbar'

export default {
  components: {
    Menunavbar
  }
}
</script>

<style scoped>
.margin {
  width: 70%;
  margin: auto;
}
.box {
  width: 70%;
  height: 600px;
  background: cyan;
}
.check {
  width: 28%;
  float: right;
  display: flex;
  flex-wrap: wrap;
  margin: 5px
}
.form-check {
  width: 30%;
  margin: 8px;
}
</style>
