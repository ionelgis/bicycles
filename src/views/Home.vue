<template>
  <div class="home">
    <div class="container">
      <div class="row">
          <product-card v-for="product in products" :product="product" :key="product.id"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["products"])
  },
  components: {
    ProductCard
  }
};
</script>
