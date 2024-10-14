<template>
  <div>
    <ul class="product-list">
      <li v-for="(product, index) in products" :key="index" class="product-item">
        <div v-if="editingIndex === index">
          <input v-model="editedProduct.name" placeholder="Edit name" />
          <input v-model="editedProduct.price" placeholder="Edit price" />
          <textarea v-model="editedProduct.description"></textarea>
          <button @click="saveEdit(index)">Save</button>
        </div>
        <div v-else>
          <strong>{{ product.name }}</strong> - ${{ product.price }}
          <p>{{ product.description }}</p>
          <button @click="editProduct(index)">Edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editingIndex: null,
      editedProduct: {}
    };
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index;
      this.editedProduct = { ...this.products[index] };
    },
    saveEdit(index) {
      this.$emit('edit-product', { index, product: this.editedProduct });
      this.editingIndex = null;
    }
  }
};
</script>

<style scoped>
.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  margin: 10px 0;
  padding: 15px;
  transition: background 0.3s ease;
}

.product-item:hover {
  background: rgba(255, 255, 255, 1);
}
</style>
