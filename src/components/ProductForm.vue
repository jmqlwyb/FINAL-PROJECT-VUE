<template>
  <div class="form-container">
    <input v-model="name" placeholder="Product Name" />
    <input type="number" v-model="price" placeholder="Price" />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="submitProduct">Add Product</button>
  </div>
</template>

<script>
import { db, collection, addDoc } from "../firebase/firebase"; // Corrected path

export default {
  data() {
    return {
      name: localStorage.getItem('name') || '',  // Load from localStorage or default to empty
      price: localStorage.getItem('price') || '',  // Load from localStorage or default to empty
      description: localStorage.getItem('description') || '',  // Load from localStorage or default to empty
    };
  },
  watch: {
    name(newValue) {
      localStorage.setItem('name', newValue); // Save to localStorage when input changes
    },
    price(newValue) {
      localStorage.setItem('price', newValue); // Save to localStorage when input changes
    },
    description(newValue) {
      localStorage.setItem('description', newValue); // Save to localStorage when input changes
    }
  },
  methods: {
    async submitProduct() {
      const product = {
        name: this.name,
        price: this.price,
        description: this.description,
      };

      try {
        // Save product data to Firestore
        const docRef = await addDoc(collection(db, "products"), product);
        console.log("Document written with ID: ", docRef.id);
        this.$emit('add-product', product);
        this.resetForm();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    resetForm() {
      // Clear localStorage and form fields after submission
      this.name = '';
      this.price = '';
      this.description = '';
      localStorage.removeItem('name');
      localStorage.removeItem('price');
      localStorage.removeItem('description');
    },
  },
};
</script>

<style scoped>
.form-container {
  margin-bottom: 20px;
}
input, textarea {
  display: block;
  width: 90%;
  margin: 5px 0;
  padding: 8px;
  border-radius: 5px;
}
</style>
