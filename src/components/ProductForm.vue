<template>
  <form @submit.prevent="addProduct">
    <input v-model="product.name" placeholder="Product Name" required />
    <input v-model="product.price" placeholder="Product Price" type="number" required />
    <input v-model="product.description" placeholder="Product Description" required />
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: '',
        description: ''
      }
    };
  },
  methods: {
    addProduct() {
      this.$emit('add-product', this.product);
      this.product = { name: '', price: '', description: '' }; 
    }
  }
};
</script>
