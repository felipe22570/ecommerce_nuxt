export const state = () => ({
  cart: [],
});

export const actions = {
  addProductToCart(ctx, payload) {
    const isProductSaved = ctx.state.cart.some(
      (c) => c.title === payload.title
    );

    if (isProductSaved) {
      ctx.commit("addCant", payload.title);
    } else {
      const { id, title, price } = payload;

      const product = {
        id,
        title,
        price,
        inicialPrice: price,
        cant: 1,
      };

      ctx.commit("addProduct", product);
    }
  },
};

export const mutations = {
  addProduct(state, payload) {
    state.cart = [...state.cart, payload];
  },

  addCant(state, payload) {
    const productToEdit = state.cart.find((c) => c.title === payload);

    productToEdit.cant++;
    productToEdit.price = productToEdit.inicialPrice * productToEdit.cant;

    const newCart = state.cart.map((c) =>
      c.title === productToEdit.title ? productToEdit : c
    );

    state.cart = newCart;
  },

  reduceCant(state, payload) {
    const productToEdit = state.cart.find((c) => c.title === payload);

    if (productToEdit.cant > 1) {
      productToEdit.cant--;
      productToEdit.price = productToEdit.inicialPrice * productToEdit.cant;

      const newCart = state.cart.map((c) =>
        c.title === productToEdit.title ? productToEdit : c
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
  getTotalAmount(state) {
    const totalAmount = state.cart.reduce(
      (sum, product) => (sum += product.price),
      0
    );

    return totalAmount;
  },
};
