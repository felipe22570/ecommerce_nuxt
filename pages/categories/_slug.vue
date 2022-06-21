<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="products">
      <div class="product" v-for="f of filteredProducts" :key="f.id">
        <img :src="f.images[0]" alt="" />
        <div class="product-info">
          <h3 class="product-title">
            {{ f.title }}
          </h3>
          <p class="product-description">{{ f.description }}</p>
          <p class="product-price">${{ f.price }}</p>
          <button @click="addProductToCart(f), showAlertSaved(f.title)">
            Add to cart {{ getCantInCart(f.title) }}
          </button>
        </div>
      </div>
      <!-- TODO: Add to component -->
      <v-snackbar
        v-model="snackbar"
        :timeout="2000"
        :value="true"
        color="#008b8b"
        fixed
        right
      >
        <strong>Product added to cart successfully!</strong>
      </v-snackbar>
    </div>
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
      cart: "cart/getCart",
      alertSaved: "cart/getAlertSaved",
      isLoading: "products/getIsLoading",
    }),
  },
  data() {
    return {
      snackbar: false,
    };
  },
  methods: {
    ...mapActions({
      filterProductsByCategory: "products/filterProductsByCategory",
      setProductToCart: "cart/setProductToCart",
      addProductToCart: "cart/addProductToCart",
    }),

    ...mapMutations({
      addProduct: "cart/addProduct",
    }),

    getCantInCart(value) {
      const cartItem = this.cart.find((c) => c.title === value);

      return cartItem?.cant;
    },

    showAlertSaved(value) {
      const productInCart = this.cart.find((c) => c.title === value);

      if (productInCart && productInCart.cant < 2) {
        setTimeout(() => {
          this.snackbar = true;
        }, 100);
      }
    },
  },
  created() {
    this.filterProductsByCategory(this.slug);
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