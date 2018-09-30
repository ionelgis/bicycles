<template>
  <div class="home">
    <section class="hero-section" >
      <h1>Best bicycles in town!</h1>
    </section> 
    <section>
      <div class="container pt-5">
        <h2 class="text-center">Latest bicycles available!</h2>
        <div class="row py-5">
            <product-card v-for="product in products" :product="product" :key="product.id"></product-card>
        </div>
      </div>
    </section>
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
<style>
.hero-section {
  background-image: url("../assets/images/home.jpeg");
}
</style>

