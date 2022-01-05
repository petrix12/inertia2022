<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MiTienda />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import MiTienda from '@/components/MiTienda.vue'

export default {
  name: 'Home',
  components: {
    /* HelloWorld */
    MiTienda
  }
}
</script>