<template>
  <div class="slide mt-4 mb-4">
    <div id="carouselExampleCaptions" class="carousel" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="slide carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/순대국.jpg" class="d-block w-100" alt="순대국">
          <div class="carousel-caption d-none d-md-block">
            <p>순대국 이미지1</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/해장라면.jpg" class="d-block w-100" alt="해장라면">
          <div class="carousel-caption d-none d-md-block">
            <p>해장라면 이미지2</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/제육볶음.jpg" class="d-block w-100" alt="제육볶음">
          <div class="carousel-caption d-none d-md-block">
            <p>제육볶음 이미지3</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/assets/수육.jpg" class="d-block w-100" alt="수육">
          <div class="carousel-caption d-none d-md-block">
            <p>수육 이미지4</p>
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
</template>

<script>

export default {

}
</script>
<style scoped>
.slide {
  max-height: 70%;
  max-width: 80%;
  margin: auto;
  border-radius: 20px;
}
p {
 text-shadow:-1px 0px 0px #000, 1px 0px 0px #000, 0px -1px 0px #000, 0px 1px 0px #000
}
</style>
