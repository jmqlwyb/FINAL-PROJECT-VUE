<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/products">Product</router-link></li>
      </ul>
    </nav>

    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
nav {
  background-color: #f0f0f0;
  padding: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: inline;
  margin-right: 20px;
}

a {
  text-decoration: none;
  color: #42b983;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
