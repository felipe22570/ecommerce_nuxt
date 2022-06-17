import axios from "axios";

export const state = () => ({
  products: [],
  filteredProducts: [],
  categoryId: null,
});

export const actions = {
  async fetchProducts(ctx, payload) {
    try {
      const { data } = await axios("https://api.escuelajs.co/api/v1/products");
      ctx.commit("setProducts", data);

      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  },

  async filterProductsByCategory(ctx, payload) {
    const data = await ctx.dispatch("fetchProducts");

    const productsFiltered = data.filter(
      (product) => product.category.id === Number(payload)
    );
    ctx.commit("setFilteredProducts", productsFiltered);
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setFilteredProducts(state, payload) {
    state.filteredProducts = payload;
  },
};

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getFilteredProducts(state) {
    return state.filteredProducts;
  },
};
