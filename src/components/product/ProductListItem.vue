<template>
  <div class="product-list--item">
    <h2 class="products--header">
      {{productItem.title}}
      <span>Add to Cart</span>
    </h2>
    <p>{{ productItem.description }}</p>
    <span class="product-list--price">
      <i class="fas fa-dollar-sign"></i>
      {{ productItem.price }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: ["productItem"]
};
</script>

<style scoped>
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
</style>

