<template>
    <div class="col-12 col-sm-6 col-md-6 col-xl-4 h-100 mb-3">
        <div class="card">
            <div class="product-image-wrap">
                 <img class="product-image" :src="product.image" :alt="product.title">
            </div>   
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.product-image-wrap {
  height: 200px;
  object-fit: cover;
}
.product-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>

