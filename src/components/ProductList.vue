<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="products-container">
      <ProductItem 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="handleAddToCart" 
      />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAddToCart(product) {
      console.log('Product added to cart:', product); 
      alert(`Added to cart: ${product.name}`); 
    },
  },
};
</script>

<style scoped>
.product-list {
  padding: 20px;
  max-width: 290%;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-list h2 {
  font-size: 20px;  
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
