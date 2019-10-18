<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>
    <editor></editor>-->
    <!-- <Home></Home>
    <MyTree></MyTree> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Editor from './components/Editor'
import Home from './components/Echarts'
import MyTree from './components/Tree'

export default {
  name: 'app',
  components: {
    Hello,
    Editor,
    Home,
      MyTree
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
