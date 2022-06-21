import http from "@/lib/http";

export const state = () => ({
  products: [],
  filteredProducts: [],
  categoryId: null,
  isLoading: false,
  error: false,
});

export const actions = {
  async fetchProducts(ctx, payload) {
    ctx.commit("setIsLoading", true);
    try {
      const { data } = await http.get("/products");
      ctx.commit("setProducts", data);

      return data;
    } catch (error) {
      ctx.commit("setError", true);
      return;
    } finally {
      ctx.commit("setIsLoading", false);
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

  setIsLoading(state, payload) {
    state.isLoading = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

export const getters = {
  getProducts(state) {
    return state.products;
  },

  getFilteredProducts(state) {
    return state.filteredProducts;
  },

  getIsLoading(state) {
    return state.isLoading;
  },
};
