import http from "@/lib/http";

export const state = () => ({
  categories: [],
  isLoading: false,
  error: false,
});

export const actions = {
  async fetchCategories(ctx, payload) {
    ctx.commit("setIsLoading", true);
    try {
      const { data } = await http.get("/categories");
      ctx.commit("setCategories", data);
    } catch (error) {
      ctx.commit("setError", true);
    } finally {
      ctx.commit("setIsLoading", false);
    }
  },
};

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },

  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
  setError(state, payload) {
    state.error = payload;
  },
};

export const getters = {
  getCategories(state) {
    return state.categories;
  },

  getIsLoading(state) {
    return state.isLoading;
  },
};
