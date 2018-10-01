<template>
  <div class="about">
    <section class="hero-section" >
      <h1>Add a new product</h1>
    </section> 
    <section>  
    <div class="container">
      <div class="row my-5">
         <div class="col-8 mx-auto">
           <form id="addForm" class="text-left" @submit.prevent="formSubmit" >
             <div v-if="product.image" class="preview-image">
               <img :src="product.image" alt="">
             </div>
            <div class="form-group">
              <label for="productImage">Choose Image</label>
              <input type="file" 
                class="form-control-file" 
                @change="processFile($event)"
                id="productImage">
            </div>
            <div class="form-group">
              <label for="productTitle">Product title</label>
              <input type="text" 
                v-model="product.title"
                class="form-control" 
                id="productTitle"  
                placeholder="Product title">
            </div>
            <button type="submit" 
              :disabled="product.title.length === 0 || product.image === undefined"
              class="btn btn-primary">
              Submit
            </button>
          </form>
          <div class="alert alert-success" role="alert" :style="{'display': showConfirmationMessage ? 'block' : 'none'}">
          You product has been added! You can view it on the home page.
          </div>
        </div>
       </div>
     </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        image: undefined
      },
      showConfirmationMessage: false
    };
  },
  methods: {
    processFile(event) {
      this.product.image = URL.createObjectURL(event.target.files[0]);
    },
    formSubmit() {
      const payload = {
        title: this.product.title,
        image: this.product.image,
        id: Date.now()
      };
      this.$store.commit("addProduct", payload);
      //reset from fields
      this.product.title = "";
      this.product.image = undefined;
      document.getElementById("addForm").reset();
      //show confirmation that product was saved
      this.showConfirmationMessage = true;
      //after 3 seconds hide confirmation message
      setTimeout(() => {
        this.showConfirmationMessage = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.preview-image {
  height: 300px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
form {
  min-height: 300px;
}
.hero-section {
  background-image: url("../assets/images/add.jpeg");
}
</style>


