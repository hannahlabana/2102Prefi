<template>
  <header class="top-container grid">
    <router-link to="/" class="title">
      <span class="title-1">shop</span>
      <span class="title-2">shop</span>
    </router-link>
    <router-link to="/cart" class="cart-container">
      <h3>Cart</h3>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-container{
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: start;
    padding: 1rem 2rem;
  }
  .title{
    font-size: 4rem;
    font-weight: bold;
  }
  .title-1{
    color: #2D3340;
    grid-column: 1 / 2;
  }
  .title-2{
    color: #F5667F;
    grid-column: 2 / -1;
  }
  .cart-container{
    justify-self: end;
  }
  h3{
    color: #F5667F;
    font-size: 2rem;
  }

</style>
