<template>
  <form @submit.prevent="submitForm" class="product-form">
    <div class="form-group">
      <label for="name">Product Name:</label>
      <input type="text" v-model="name" class="form-input" />
    </div>
    <div class="form-group">
      <label for="price">Price:</label>
      <input type="number" v-model="price" class="form-input" />
    </div>
    <div class="form-group">
      <label for="description">Description:</label>
      <textarea v-model="description" class="form-textarea"></textarea>
    </div>
    <button type="submit" class="submit-button">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: 0,
      description: ''
    };
  },
  methods: {
    submitForm() {
      const product = {
        name: this.name,
        price: this.price,
        description: this.description
      };
      this.$emit('add-product', product);
      this.name = '';
      this.price = 0;
      this.description = '';
    }
  }
};
</script>

<style scoped>
.product-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #007BFF;
  outline: none;
}

.submit-button {
  background-color: #007BFF;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
