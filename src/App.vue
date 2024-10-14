<template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/home" class="nav-link">Home</router-link>
      <router-link to="/products" class="nav-link">Products</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0; 
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #333; 
  padding: 15px;
  display: flex;
  justify-content: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
  border-radius: 5px;
}

router-view {
  flex: 1; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
