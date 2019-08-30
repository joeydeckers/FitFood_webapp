<template>
  <div id="app">
    <b-container>
      <Navbar/>
      <router-view/>
    </b-container>
  </div>
</template>


<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  },
  mounted () {
    this.$store.dispatch('getRecipes');
  }
}
</script>

<style lang="scss">
@import './assets/css/main.css';
</style>
