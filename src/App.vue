<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// Import components for routing
import Home from './views/Home.vue';
import Products from './views/Products.vue';

export default {
  name: 'App',
  components: {
    Home,
    Products
  }
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #fdf8ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

nav {
  background-color: #08070893;
  padding: 10px;
  border-radius: 5px;
}

nav a {
  color: rgba(6, 49, 47, 0.656);
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
