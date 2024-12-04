<template>
  <div class="form-container">
    <h2>Add Product</h2>
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
      name: localStorage.getItem('name') || '', // Load from localStorage or default to empty
      price: localStorage.getItem('price') || '', // Load from localStorage or default to empty
      description: localStorage.getItem('description') || '', // Load from localStorage or default to empty
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
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 10px;
  width: 400px;
  margin: 0 auto;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); */
}

h2 {
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin-bottom: 15px;
  font-size: 1.8rem;
  text-decoration: underline;
}

input, textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #000000;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: #000000;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

input:focus, textarea:focus {
  background-color: #e6e6e6;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 1rem;
  border: 2px solid #000000;
  background-color: #000000;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover {
  background-color: #ffffff;
  color: #000000;
}

button:active {
  transform: scale(0.98);
}
</style>
