<template>
  <div class="about">
    <h1>This is an add page</h1>
    <div class="container">
      <div class="row">
         <div class="col-8 mx-auto">
           <form class="text-left" @submit.prevent="formSubmit" >
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
        </div>
       </div>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        title: "",
        image: undefined
      }
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

      // console.log(payload);

      this.$store.commit("addProduct", payload);
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
</style>


