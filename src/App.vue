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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
