<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>
    <editor></editor>-->
    <Home></Home>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Editor from './components/Editor'
import Home from './components/Echarts'

export default {
  name: 'app',
  components: {
    Hello,
    Editor,
    Home
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
  margin-top: 60px;
}
</style>
