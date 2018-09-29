<template>
<div class="container">
    <div class="row">
        <div class="col-6 mx-auto">
             <form class="text-left" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="loginUsername">Username</label>
                    <input type="text" 
                        class="form-control" 
                        id="loginUsername" 
                        v-model="user.userName" 
                        placeholder="Enter username">
                </div>
                <div class="form-group">
                    <label for="loginUserPassword">Password</label>
                    <input type="password" 
                        class="form-control" 
                        id="loginUserPassword"
                        v-model="user.password" 
                        placeholder="Password">
                </div>
                <button type="submit" 
                    class="btn btn-primary"
                    :disabled="user.userName.length === 0 || user.password.length === 0">
                    Submit
                </button>
            </form>
        </div>
    </div>
</div> 
</template>
<script>
import { users } from "../config/hardcodedUserData.js";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    handleLogin() {
      const userFound = users.find(user => user.username == this.user.userName);
      if (userFound === undefined) {
        console.log("no uiser with this username");
      } else if (
        userFound !== undefined &&
        userFound.password == this.user.password
      ) {
        const userToSet = {
          id: userFound.id,
          userName: userFound.username
        };
        this.$store.commit("setLoggedInUser", userToSet);
        this.$router.push("/");
      } else {
        console.log("incorrect password");
      }
    }
  }
};
</script>

