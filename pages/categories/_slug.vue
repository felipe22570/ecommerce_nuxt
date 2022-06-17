<template>
  <div class="products">
    <div class="product" v-for="f of filteredProducts" :key="f.id">
      <img :src="f.images[0]" alt="" />
      <div class="product-info">
        <h3 class="product-title">
          {{ f.title }}
        </h3>
        <p class="product-description">{{ f.description }}</p>
        <p class="product-price">${{ f.price }}</p>
        <button @click="addProduct(f)">Add to cart</button>
      </div>
    </div>
    <!-- TODO: Add to component -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  computed: {
    ...mapGetters({
      filteredProducts: "products/getFilteredProducts",
    }),
  },
  methods: {
    ...mapActions({
      filterProductsByCategory: "products/filterProductsByCategory",
      setProductToCart: "cart/setProductToCart",
    }),

    ...mapMutations({
      addProduct: "cart/addProduct",
    }),
  },
  created() {
    this.filterProductsByCategory(this.$route.params.slug);
  },
};
</script>

<style lang="scss" scoped>
.products {
  width: 80%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.product {
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 100%;
  }
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  .product-title {
    font-weight: 800;
  }

  .product-description {
    font-size: 0.85rem;
  }

  .product-price {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0.5rem;
    color: steelblue;
  }

  button {
    background-color: slateblue;
    color: white;
    padding: 0.7rem 0;
    border-radius: 5px;
  }
}
</style>