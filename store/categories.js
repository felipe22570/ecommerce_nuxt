import axios from "axios";

export const state = () => ({
  categories: [],
});

export const actions = {
  async fetchCategories(ctx, payload) {
    try {
      const { data } = await axios(
        "https://api.escuelajs.co/api/v1/categories"
      );
      // Create axios client
      ctx.commit("setCategories", data);
    } catch (error) {
      console.log(error);
    }
  },
};

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload;
  },
};

export const getters = {
  getCategories(state) {
    return state.categories;
  },
};
