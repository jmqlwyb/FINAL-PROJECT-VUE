<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - ${{ product.price }} <br /> {{ product.description }}
        <button @click="editProduct(index)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    editProduct(index) {
      this.$emit('edit-product', index);
    }
  }
};
</script>
