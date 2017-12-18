<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{ count }}</h2>
    <p>
      <button @click="$store.commit('add',change())">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script>
  import store from '@/vuex/store';
  import { mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  data:function () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    change:function(){
      return 'change'
    }
  },
  computed:mapState(['count']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
