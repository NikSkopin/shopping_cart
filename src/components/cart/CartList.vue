<template>
  <div id="cart">
    <div class="cart--header">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul>
      <li v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
        <CartListItem :cartItem="cartItem"/>
      </li>
      <div class="cart-details">
        <p>
          Total Quantity:
          <span>{{ cartQuantity }}</span>
        </p>
        <p>
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button class="button">
      Checkout (
      <span class>$ {{ cartTotal }}</span>)
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CarListItem";

export default {
  name: "CartList",
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"])
  },
  components: {
    CartListItem
  }
};
</script>

<style  scoped>
#cart {
  padding: 20px;
  display: flex;
  flex-flow: column;
}

.cart--header {
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}

ul {
  list-style: none;
  padding: 0;
}

.cart-details {
  display: flex;
  justify-content: space-between;
}
</style>
