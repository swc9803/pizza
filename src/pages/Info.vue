<template>
  <div class="margin">
    <h6>테스트용으로 만들었으며 실존하지 않는 가게입니다.</h6>
    <div id="map" />
  </div>
</template>

<script>
export default {
  mounted () {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript()
  },
  methods: {
    addKakaoMapScript () {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ab16ad7b4856457ef42931abc7b32e7d'
      document.head.appendChild(script)
    },
    initMap () {
      var container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
      var options = {
        // 지도를 생성기본 옵션
        center: new kakao.maps.LatLng(37.61287, 127.0685), // 지도의 중심좌표.
        level: 4 // 지도 레벨
      }

      var map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

      var marker = new kakao.maps.Marker({
        // 지도 중심 마커 생성합니다
        position: map.getCenter()
      })
      // 지도 마커 표시합니다
      marker.setMap(map)
    }
  }

}
</script>

<style scoped>
.margin {
  width: 80%;
  margin: auto;
}
#map {
  width: 500px;
  height: 400px;
}
</style>
