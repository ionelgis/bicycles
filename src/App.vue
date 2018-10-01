<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footer-row></footer-row>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import FooterRow from "./components/FooterRow.vue";
import { productData } from "./config/hardcodedProducts.js";
export default {
  components: { Navbar, FooterRow },
  created() {
    this.$store.commit("addDefaultProducts", productData);
  }
};
</script>


<style lang="scss">
.hero-section {
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-position: center;
}

.hero-section h1 {
  text-align: center;
  color: #ffffff;
}
.h-fill-available {
  height: -webkit-fill-available;
}

.centerY {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
