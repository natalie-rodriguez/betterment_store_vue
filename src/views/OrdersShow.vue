<template>
  <div class="show">
    <h1>Your Order Has Been Placed</h1>
    <!--  <p>Price: ${{ product.price }}</p>
    <div><img v-bind:src="product.image_url" v-bind:alt="product.name" /></div>
    <p>Description: {{ product.description }}</p> -->
    <!-- <p>Instock: {{ product.instock }}</p> -->
    <!--  <p>Supplier: {{ product.supplier_name }}</p> -->
    <!--  <input type="text" v-model="quantity" /> -->

    <!-- <router-link v-bind:to="`/products/${product.id}/edit`">Edit Product</router-link> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
{
}
export default {
  data: function() {
    return {
      message: "Helloooooo from the show file!",
      order: {}
    };
  },
  created: function() {
    axios.get(`/api/orders/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.order = response.data;
    });
  }
};
</script>
