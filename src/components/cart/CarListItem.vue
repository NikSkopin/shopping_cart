<template>
  <div class="cart-item">
    <div class="cart-item--container">
      <div class="cart-item--title">
        <p>{{ cartItem.title }}</p>
        <div class="cart-item--arrows">
          <i class="fa fa-arrow-circle-up cart-item--modify"></i>
          <i class="fa fa-arrow-circle-down cart-item--modify"></i>
        </div>
      </div>
      <div class="cart-item--content">
        <span class="cart-item--price">{{ cartItem.price }}$ each</span>
        <span class="cart-item--quantity">Quantity: {{ cartItem.quantity }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  props: ["cartItem"]
};
</script>

<style scoped>
.cart-item--container {
  display: flex;
  flex-flow: column;
}
.cart-item--title {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.cart-item--title p {
  padding: 0;
  margin: 0;
}
.cart-item--content {
  padding: 10px 0;

  display: flex;
  justify-content: space-between;
}
.cart-item--modify {
  cursor: pointer;
  margin: 0 3px;
}
</style>

