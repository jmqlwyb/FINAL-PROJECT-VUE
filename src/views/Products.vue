<template>
  <div class="products-view">
    <h2>𝙋𝙧𝙤𝙙𝙪𝙠𝙩𝙤 𝙣𝙞 𝘽𝙚𝙣𝙞𝙩𝙤</h2>
    <br>
    <ProductForm @add-product="addProduct" />
    <ProductList
      :products="products"
      @edit-product="updateProduct"
    />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductForm,
    ProductList,
  },
  data() {
    return {
      products: JSON.parse(localStorage.getItem('products')) || [],
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
      this.saveProducts();
    },
    updateProduct({ index, product }) {
      this.products[index] = product;
      this.saveProducts();
    },
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products));
    },
  },
};
</script>

<style scoped>
.products-view {
  background-color: #aeddd85b;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  margin: 50px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 15px;
}

p {
  margin-top: 20px;
  color: #0b0a0a;
  font-style: italic;
}
</style>