<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div class="mt">
      <router-view/>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}

</script>
<style>
#app {
  font-family: Avenir,
  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(40, 40, 40);
  top:0;
  left:0;
  position: absolute;
  width:100%;
  color: white;
}
a.router-link-active {
  border-bottom: 2px solid yellow;
}
.mt {
  padding-top: 145px;
}
</style>
