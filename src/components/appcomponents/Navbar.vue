<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <Symbol />
      <!-- 창 작을때 -->
      <div>
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
                <router-link class="nav-link" :to="{ name: 'Rise'}">
                  밥
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Noodle'}">
                  면
                </router-link>
              </li>
              <li><hr class="hr dropdown-divider"></li>
              <li class="dropdown-item">
                <router-link class="nav-link" :to="{ name: 'Side'}">
                  사이드 메뉴
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
import Symbol from '@/components/appcomponents/Symbol'
export default {
  components: {
    Symbol
  }
}
</script>

<style scoped>
nav {
  background: rgb(40, 40, 40);
  border-bottom: 1px solid rgb(53, 73, 94);
}
.dropdown-menu {
  background: rgb(40, 40, 40);
}
.hr {
  border-top: 1px solid rgb(255, 255, 255);
}
</style>
