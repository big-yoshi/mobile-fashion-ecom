<template>
  <Navbar></Navbar>

  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default{
  components: {
    Navbar
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 18px;
  margin-right: 18px;
}

</style>
