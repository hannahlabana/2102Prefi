<template>
  <div class="item-card">
    <div class=""><img class="product-img" :src="item.img" alt=""></div>
    <div>
      <div class="flex detail-container">
        <p class="flex-1 detail-1">{{ item.name }}</p>
        <p class="flex-1 detail-2">₱{{ item.price }}</p>
       </div>
      <router-link
        :to="{ name: 'Product', params: { item: item.name } }"><button
        class="view-button">View</button>
        </router-link>
     </div>
   </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    item: Object,
  },
  mounted(){
  }
}
</script>

<style scoped>
    .item-card{
        background-color: #2D3340;
        display: flex;
        flex-direction: column;
        border-radius: 17px;
    }
    .product-img{
        object-fit: cover;
        width: 26.625rem;
        height: 15.313rem;
        border-radius: 17px 17px 0 0;
    }
    .detail-container{
        font-size: 24px;
        margin: 1rem 2rem;
    }
    .detail-1{
      text-align: left;
    }
    .detail-2{
      text-align: right;
    }
    .view-button{
        height: 3rem;
        width: 8.938rem;
        border-radius: 6px;
        background-color: #F5667F;
        color: #fff;
        box-shadow: transparent;
        margin-top: 0px;
        margin-bottom:23px;
        font-size: 24px;
    }
    input, button{
        border: none;
        border-color: none;
    }
    
</style>