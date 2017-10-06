<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='/'>hello</router-link>&nbsp;
      <router-link to='/hi'>hi</router-link>&nbsp;
      <router-link :to="{name:'hi1',params:{username:'lion',id:'ynn'}}">hi1</router-link>&nbsp;
      <router-link to='/hi/hi2'>hi2</router-link>
    </div>
    <h2>{{ $route.name }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
