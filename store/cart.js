export const state = () => ({
  cart: [],
});

export const actions = {};

export const mutations = {
  addProduct(state, payload) {
    const isProductSaved = state.cart.some((c) => c.title === payload.title);

    if (isProductSaved) {
      alert("Product is already in cart");
    } else {
      const { id, title, price } = payload;

      const product = {
        id,
        title,
        price,
        inicialPrice: price,
        cant: 1,
      };
      state.cart = [...state.cart, product];
    }
  },

  addCant(state, payload) {
    payload.cant++;
    payload.price = payload.inicialPrice * payload.cant;

    const newCart = state.cart.map((c) =>
      c.title === payload.title ? payload : c
    );

    state.cart = newCart;
  },

  reduceCant(state, payload) {
    if (payload.cant > 1) {
      payload.cant--;

      payload.price = payload.inicialPrice * payload.cant;

      const newCart = state.cart.map((c) =>
        c.title === payload.title ? payload : c
      );

      state.cart = newCart;
    }
  },

  deleteProduct(state, payload) {
    const newCart = state.cart.filter((c) => c.id !== payload);

    state.cart = newCart;
  },
};

export const getters = {
  getCart(state) {
    return state.cart;
  },
  getTotalAmount(state) {},
};
