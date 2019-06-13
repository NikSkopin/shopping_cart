<template>
  <div id="cart">
    <div class="cart--header">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>
    <ul>
      <li class="cart-item">
        <div class="cart-item--container">
          <div class="cart-item--title">
            <p>The First Item</p>
            <div class="cart-item--arrows">
              <i class="fa fa-arrow-circle-up"></i>
              <i class="fa fa-arrow-circle-down"></i>
            </div>
          </div>
          <div class="cart-item--content">
            <span class="cart-item--price">19.99$ each</span>
            <span class="cart-item--quantity">Quantity: 2</span>
          </div>
        </div>
      </li>
      <div class="cart-details">
        <p>
          Total Quantity:
          <span class>2</span>
        </p>
        <p class>
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button class="button">
      Checkout (
      <span class>$</span>)
    </button>
  </div>
</template>

<script>
export default {
  name: "CartList"
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

.cart-details {
  display: flex;
  justify-content: space-between;
}
</style>
