<template>
  <div class="products-view">
    <h2>𝙋𝙧𝙤𝙙𝙪𝙠𝙩𝙤 𝙣𝙞 𝘽𝙚𝙣𝙞𝙩𝙤 </h2>
    
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
      products: this.loadProducts(), // Load products from localStorage on initialization
    };
  },
  methods: {
    /**
     * Add a new product to the products array and save to localStorage.
     * @param {Object} product - The product to add.
     */
    addProduct(product) {
      this.products.push(product);
      this.saveProducts();
    },
    /**
     * Update a product at the specified index and save to localStorage.
     * @param {Object} payload - An object containing the index and updated product.
     */
    updateProduct({ index, product }) {
      this.products.splice(index, 1, product); // Replace the product at the given index
      this.saveProducts();
    },
    /**
     * Save the current products to localStorage.
     */
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products));
    },
    /**
     * Load products from localStorage.
     * @returns {Array} - The products array or an empty array if no data exists.
     */
    loadProducts() {
      return JSON.parse(localStorage.getItem('products')) || [];
    },
  },
};
</script>

<style scoped>
.products-view {
  padding: 200px;
  border-radius: 10px;
  width: 350px;
  margin: 10px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted shadow for better readability */
  text-align: center;
}

h2 {
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

p {
  margin-top: 20px;
  color: #555; /* Softer color for the paragraph */
  font-style: italic;
}
</style>
