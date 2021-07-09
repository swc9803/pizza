<template>
  <div>
    <Menunavbar />
    <div class="margin mt-5">
      <div class="check">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" v-model="checkAll">
          <label>전체 선택</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="치즈" v-model="checked">
          <label>치즈 추가</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="올리브" v-model="checked">
          <label>올리브</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="감자" v-model="checked">
          <label>웨지감자</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="베이컨" v-model="checked">
          <label>베이컨</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="양파" v-model="checked">
          <label>양파</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="버섯" v-model="checked">
          <label>버섯</label>
        </div><br>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="새우" v-model="checked">
          <label>새우</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="페퍼로니" v-model="checked">
          <label>페퍼로니</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="피망" v-model="checked">
          <label>피망</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="가지" v-model="checked">
          <label>가지</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="파인애플" v-model="checked">
          <label>파인애플</label>
        </div>
      </div>
      <div class="box">
        <span>체크한 것 : {{ checked }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Menunavbar from '@/components/Menunavbar'
import { ref } from 'vue'

export default {
  // data () {
  //   return {
  //     checked: []
  //   }
  // },
  setup () {
    const checked = ref([])
    return {
      checked
    }
  },
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
  background: rgb(125, 128, 128);
}
.check {
  width: 28%;
  float: right;
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
}
.form-check {
  width: 30%;
  margin: 8px;
}
</style>
