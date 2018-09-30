<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand" href="#">Bicycles</a>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" tag="li" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" tag="li" class="nav-link">Add</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" tag="li" class="nav-link">Contact</router-link>
      </li>
    </ul>
    <ul v-if="!isLoggedIn" class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link to="/login" tag="li" class="nav-link">Log In</router-link> 
      </li>
    </ul>
    <div v-else class="text-right">
        <p class="mb-0 ">{{getLoggedInUser.userName}}</p>
        <small @click="handleLogOut">(<a href="#" @click.prevent>Log out</a> )</small>
    </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn", "getLoggedInUser"])
  },
  methods: {
    handleLogOut() {
      this.$store.commit("logOutUser");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  color: #007bff;
  font-weight: 600;
}
</style>



