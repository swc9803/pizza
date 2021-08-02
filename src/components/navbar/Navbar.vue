<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <Symbol />
      <SymbolText />
      <div>
        <!-- 창 작을때 -->
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <div class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              메뉴
            </div>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Pizza'}">
                  피자
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Pasta'}">
                  파스타
                </router-link>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Side'}">
                  사이드 메뉴
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Custom'}">
                  커스텀 피자
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Info'}">
              가게 정보
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'Notice'}">
              공지사항
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Symbol from '@/components/navbar/Symbol'
import SymbolText from '@/components/navbar/SymbolText'
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Symbol,
    SymbolText
  },
  setup () {
    onMounted(() => {
      // 위로 스크롤 시 navbar 위로
      const showAnim = gsap.from('nav', {
        yPercent: -100,
        paused: true,
        duration: 0.5
      }).progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      })
    })
  }
}
</script>

<style scoped>
nav {
  background: rgb(40, 40, 40);
  border-bottom: 1px solid rgb(53, 73, 94);
  position: fixed;
  width: 100%;
  z-index: 5;
}
.dropdown-menu {
  background: rgb(33, 37, 41);
}
hr {
  border-top: 1px solid rgb(255, 255, 255);
}
</style>
