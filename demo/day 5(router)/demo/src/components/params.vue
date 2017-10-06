<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>id:{{ $route.params.id }}</p>
    <p>title:{{ $route.params.title }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'right',
  data () {
    return {
      msg: 'Welcome to Your params demo'
    }
  }
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
