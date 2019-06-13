<template>
  <div id="products" class>
    <div class="products--header">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item">
        <h2 class>
          The First Item
          <span class>Add to Cart</span>
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum quo error repudiandae quis non.</p>
        <span class="product-list--price">
          <i class="fas fa-dollar-sign"></i> 19.99
        </span>
      </div>
    </div>
    <div class="product-count">
      <span class># of products: 4</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList"
};
</script>

<style scoped>
#products {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.products--header {
  width: 100%;
  border-bottom: 1px solid #000;
  text-align: center;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}

.product-list--item h2 {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.product-list--item h2 > span {
  color: #fff;
  background-color: #af2165;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 15px;
}

.product-list--price {
  color: #af2165;
  font-weight: bold;
}
.product-count {
  text-align: right;
  font-weight: bold;
}
</style>
