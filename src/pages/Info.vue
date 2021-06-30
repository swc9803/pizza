<template>
  <div>
    <h6>테스트용으로 만들었으며 실존하지 않는 가게입니다.</h6>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  // mounted () {
  //   window.kakao && window.kakao.maps
  //     ? this.initMap()
  //     : this.addKakaoMapScript()
  // },
  // setup () {
  //   var container = document.getElementById('map')
  //   var options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   }
  //   var map = new kakao.maps.Map(container, options)
  //   return {
  //     map
  //   }
  // }
}
</script>

<style scoped>
#map {
  width: 500px;
  height: 400px;
}
</style>
