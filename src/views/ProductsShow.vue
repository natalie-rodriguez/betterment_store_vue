<template>
  <div class="show">
    <h1>{{ product.name }}</h1>
    <p>Price: ${{ product.price }}</p>
    <div><img v-bind:src="product.image_url" v-bind:alt="product.name" /></div>
    <p>Description: {{ product.description }}</p>
    <!-- <p>Instock: {{ product.instock }}</p> -->
    <!--  <p>Supplier: {{ product.supplier_name }}</p> -->
    <input type="text" v-model="quantity" />
    <button v-on:click="addtocart()">Add to Cart</button>

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
      product: {},
      quantity: ""
    };
  },
  created: function() {
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.product = response.data;
    });
  },
  methods: {
    addtocart: function() {
      var params = { product_id: this.product.id, quantity: this.quantity };
      axios.post("/api/carted_products", params).then(response => {
        console.log("carted project testing");
      });
    }
  }
};
</script>
