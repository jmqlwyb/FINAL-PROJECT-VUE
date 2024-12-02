<template>
  <div class="home-container">
    <center>
      <h1 class="title"> 𝙃𝙤𝙢𝙚 𝙋𝙖𝙜𝙚</h1>
    </center>
    <div class="content">
      <p class="lorem-text">
        𝐿𝑜𝓇𝑒𝓂 𝐼𝓅𝓈𝓊𝓂 𝒾𝓈 𝓈𝒾𝓂𝓅𝓁𝓎 𝒹𝓊𝓂𝓂𝓎 𝓉𝑒𝓍𝓉 𝑜𝒻 𝓉𝒽𝑒 𝓅𝓇𝒾𝓃𝓉𝒾𝓃𝑔 𝒶𝓃𝒹 𝓉𝓎𝓅𝑒𝓈𝑒𝓉𝓉𝒾𝓃𝑔 𝒾𝓃𝒹𝓊𝓈𝓉𝓇𝓎...
      </p>
      <br>
      <p>
        <b>About Lorem Ipsum:</b> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
      <button @click="updateText">Click to update content</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 'Default lorem ipsum content.'
    }
  },
  methods: {
    updateText() {
      this.content = 'Updated lorem ipsum content after button click.';
    }
  }
}
</script>

<style scoped>
.home-container {
  padding: 20px;
  background-color: #f5f5f5;
}

.title {
  font-family: 'Cursive', sans-serif;
  font-size: 2.5rem;
}

.lorem-text {
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}
</style>
