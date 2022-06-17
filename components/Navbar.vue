<template>
  <div class="navbar">
    <nuxt-link to="/" class="title">MiEcommerce</nuxt-link>
    <nuxt-link to="/cart" class="cart">Carrito</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 5rem;
  background-color: darkcyan;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  .title {
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      font-weight: 800;
    }
  }

  .cart {
    text-decoration: none;
    color: inherit;
  }
  .cart:hover {
    font-weight: 500;
  }
}
</style>