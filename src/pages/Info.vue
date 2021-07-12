<template>
  <div class="margin">
    <div>
      <img src="@/assets/pizzachef.jpg" class="chef mt-5" alt="pizzachef">
      <br><br><br><br>
      <b class="title">Sung Pizza</b> <br><br>
      <p>Sung Pizza의 모든 요리는 국내산 재료만을 써 만들었으며 재료를 재사용 하지 않습니다.
        <br>피자뿐만이 아닌 파스타, 스파게티, 라자냐, 치킨 등 여러 즐길 거리가 있습니다.
      </p>
      <span style="color: rgb(255, 50, 50)">
        * 본 사이트는 테스트용으로 만들었으며 실존하지 않는 가게입니다 *<br><br>
      </span>
    </div>
    <hr class="mt-5 mb-4">
    <div>
      <i class="fas fa-arrow-circle-right mb-4" style="color: rgb(255, 132, 60);"></i>
      <span class="tabledetail"> 가게 상세정보</span><br>
      <table style="width: 100%">
        <tbody>
          <tr>
            <th>가게 주소</th>
            <td>서울특별시 석관동</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>010 1234 5678</td>
          </tr>
          <tr>
            <th>영업시간</th>
            <td>11:00 ~ 21:00</td>
          </tr><br>
        </tbody>
      </table>
      <div id="map"/>
    </div>
    <p style="color: rgb(255, 50, 50); text-align: center;">
      * 본 사이트는 테스트용으로 만들었으며 실존하지 않는 가게입니다 *
    </p>
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
        center: new kakao.maps.LatLng(37.61287, 127.0685), // 지도의 중심좌표.
        level: 4 // 지도 레벨
      }
      var map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
      var marker = new kakao.maps.Marker({
        // 지도 중심에 마커
        position: map.getCenter()
      })
      // 지도 마커 표시
      marker.setMap(map)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 40px;
  color: rgb(255, 132, 60);
}
.chef {
  float: right;
  width: 40%;
}
.margin {
  width: 60%;
  margin: auto;
}
#map {
  float: right;
  width: 100%;
  height: 400px;
}
hr {
  height: 4px;
  background: linear-gradient(270deg, rgba(34,34,34,0), rgba(146,111,52,0.8), rgb(255, 217, 120), rgba(146,111,52,0.8), rgba(34,34,34,0));
}
.tabledetail {
  font-size: 23px;
  color: rgb(255, 179, 134);
}
table {
  width: 420px;
  border-top: 3px solid rgb(230, 230, 230);
}
tr {
  border-bottom: 1px solid rgb(107, 107, 107);
  padding: 15px;
  display: block;
}
th {
  color: rgb(183, 232, 255);
}
td {
  width: 300px;
  text-align: center;
}
</style>
