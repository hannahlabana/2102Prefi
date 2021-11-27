<template>
  <main class="home">
    <div class="grid home-positioning">
      <div v-for="product in products"
          :key="product.id">
        <ProductCard :item="product" />
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  computed: {
    products: function(){
      return this.$store.state.products.filter(el => el.quantity !== 0);
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .home-positioning{
    margin: 3rem 270px;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
</style>
