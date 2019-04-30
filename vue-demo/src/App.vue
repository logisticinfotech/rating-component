<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <RateDemo/>
  </div>
</template>

<script>
import RateDemo from './components/RateDemo'

export default {
  name: 'App',
  components: {
    RateDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
