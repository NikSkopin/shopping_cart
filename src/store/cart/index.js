const state = {
  cartItems: [
    {
      id: 2,
      title: 'The Second Item',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem quaerat enim nemo corrupti inventore eos.',
      price: 15.99,
      quantity: 2
    }
  ]
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  }
};
const actions = {};
const getters = {
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
};
const cartModule = {
  state,
  mutations,
  actions,
  getters
};

export default cartModule;
