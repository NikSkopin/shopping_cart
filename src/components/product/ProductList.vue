<template>
  <div id="products" class>
    <div class="products--header">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item">
        <div>
          <h2 class>
            The First Item
            <span class>Add to Cart</span>
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui voluptatum quo error repudiandae quis non.</p>
          <span class>
            <i class="fa fa-usd"></i> 19.99
          </span>
        </div>
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
}

.products--header {
  width: 100%;
  border-bottom: 1px solid #000;
  text-align: center;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
}
</style>
