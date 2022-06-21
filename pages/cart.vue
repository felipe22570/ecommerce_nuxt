<template>
  <div class="cart">
    <h1>Cart</h1>
    <div v-for="product of cart" :key="product.id" class="cart-list">
      <div class="cart-product">
        <h3>{{ product.title }}</h3>
        <div class="cart-product-cant">
          <button @click="reduceCant(product.title)">-</button>
          <span>{{ product.cant }}</span>
          <button @click="addCant(product.title)">+</button>
        </div>
        <span class="price">${{ product.price }}</span>
        <span class="delete" @click="deleteProduct(product.id)">Del</span>
      </div>
    </div>
    <span class="cart-price">Total: ${{ totalAmount }}</span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapGetters({
      cart: "cart/getCart",
      totalAmount: "cart/getTotalAmount",
    }),
  },
  methods: {
    ...mapMutations({
      addCant: "cart/addCant",
      reduceCant: "cart/reduceCant",
      deleteProduct: "cart/deleteProduct",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  width: 70%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
}

.cart-product {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 1rem 0.5rem;
}

.cart-product-cant {
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    padding: 0.3rem 1rem;
    border: 1px solid lightgray;
  }
}

.cart-price {
  text-align: right;
  font-size: 1.2rem;
}

.delete {
  font-weight: 800;
  color: red;
  cursor: pointer;
}
</style>