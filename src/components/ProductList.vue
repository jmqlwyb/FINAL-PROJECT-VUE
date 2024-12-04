<template>
  <ul class="product-list">
    <li v-for="(product, index) in products" :key="index">
      <div v-if="editingIndex === index" class="edit-form">
        <input v-model="editedProduct.name" placeholder="Edit name" />
        <input type="number" v-model="editedProduct.price" placeholder="Edit price" />
        <textarea v-model="editedProduct.description" placeholder="Edit description"></textarea>
        <button @click="saveEdit(index)" class="save-button">Save</button>
        <button @click="cancelEdit" class="cancel-button">Cancel</button>
      </div>
      <div v-else class="product-item">
        <strong class="product-name">{{ product.name }}</strong> - <span class="product-price">${{ product.price }}</span>
        <p class="product-description">{{ product.description }}</p>
        <button @click="editProduct(index)" class="edit-button">Edit</button>
        <button @click="deleteProduct(index)" class="delete-button">Delete</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editingIndex: null,
      editedProduct: {},
    };
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index;
      this.editedProduct = { ...this.products[index] };
    },
    saveEdit(index) {
      this.$emit('edit-product', { index, product: this.editedProduct });
      this.resetEdit();
    },
    cancelEdit() {
      this.resetEdit();
    },
    resetEdit() {
      this.editingIndex = null;
      this.editedProduct = {};
    },
    deleteProduct(index) {
      this.$emit('delete-product', index); 
      
    },
  },
};
</script>


<style scoped>
/* General List Styles */
.product-list {
  list-style-type: none;
  padding: 0;
  margin: 20px auto;
  max-width: 600px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

/* Individual Product Styles */
.product-item {
  padding: 20px;
  border-bottom: 5px solid #000000;
  transition: background-color 0.3s ease;
}

.product-item:hover {
  background-color: #f9f9f9;
}

.product-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #000000;
}

.product-price {
  font-size: 1rem;
  color: #333333;
}

.product-description {
  font-size: 0.9rem;
  color: #555555;
  margin-top: 10px;
}

/* Edit Form Styles */
.edit-form {
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #000000;
  border-radius: 5px;
}

input, textarea {
  display: block;
  width: 1500%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  font-family: 'Arial', sans-serif;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  border-color: #555555;
  outline: none;
}

/* Button Styles */
button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.edit-button {
  background-color: #000000;
  color: #ffffff;
}

.save-button {
  background-color: #4CAF50;
  color: #ffffff;
}

.cancel-button {
  background-color: #f44336;
  color: #ffffff;
}

button:hover {
  background-color: #ffffff;
  color: #000000;
}
</style>
