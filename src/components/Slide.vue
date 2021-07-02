<template>
  <div class="slide">
    <div id="carouselExampleCaptions" class="carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="slide carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/치즈피자.jpg" class="d-block w-100" alt="치즈피자">
          <div class="carousel-caption d-none d-md-block">
            <p>치즈피자 이미지1</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/페페로니피자.jpg" class="d-block w-100" alt="페페로니피자">
          <div class="carousel-caption d-none d-md-block">
            <p>페페로니피자 이미지2</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/파스타.jpg" class="d-block w-100" alt="파스타">
          <div class="carousel-caption d-none d-md-block">
            <p>파스타 이미지3</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/스파게티.jpg" class="d-block w-100" alt="스파게티">
          <div class="carousel-caption d-none d-md-block">
            <p>스파게티 이미지4</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">이전</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">다음</span>
      </button>
    </div>
  </div>
  <div class="goMenu mt-4" @click="moveToMenu">
    메뉴 보러 가기
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const moveToMenu = () => {
      router.push({
        name: 'Pizza'
      })
    }
    return {
      moveToMenu
    }
  }
}
</script>

<style scoped>
.slide {
  max-width: 72%;
  margin: auto;
  border-radius: 20px;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}
p {
  text-shadow:-1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 1px #000, 1px 1px 1px #000
}
.goMenu {
  color: rgba(223,190,106,0.7);
  border-radius: 50px;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(270deg, rgba(223,190,106,0.8), rgba(146,111,52,0.8), rgba(34,34,34,0), rgba(34,34,34,0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  border: 1px solid rgba(223,190,106,0.3);
  margin: auto;
  display: block;
  text-align: center;
  width: 270px;
  cursor: pointer;
}
.goMenu:hover {
  color: #fff;
  border: 1px solid rgba(223,190,106,0);
  color: white;
  background-position: 99% 50%;
}
</style>
