<template>
  <div>
    <center>
    <h2>Product List</h2>
    <ProductForm @add-product="addProduct" />
    <ProductList :products="products" @edit-product="editProduct" />
    </center>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  components: {
    ProductForm,
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    },
    editProduct({ index, product }) {
      this.$set(this.products, index, product);
    }
  }
};
</script>
