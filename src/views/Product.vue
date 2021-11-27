<template>
  <main>
      <div class="flex main-container">
          <div class="img-container flex-1"><img :src="product.img" alt="" class="product-img"></div>
          <div class="flex-1 flex-item-2">
            <div class="detail-container flex">
                <h2 class="flex-1 detail-1">{{ product.name }}</h2>
                <h2 class="flex-1 detail-2">{{ product.price.toLocaleString("en-US", {style: 'currency', currency: 'PHP'}) }}</h2>
            </div>
            <p class="product-description">{{ product.details }}</p>
            <div class="flex category-container"><p>Category: <span v-for="category in categories" :key="category">{{ category }}, </span></p></div>
            <div>
                <div class="button-quantity">
                    <button @click="mutateQuantity('minus');" class="button-decrement">-</button>
                    <input
                    type="number"
                    v-model="quantity"
                    min="0"
                    :max="product.quantity"
                    class="quantity-input"
                    />
                    <button
                    @click="mutateQuantity('add');"
                    class="button-increment">+</button>
                </div>
            </div>
            <div><button class="cart-button" @click="$store.commit('addToCart', { product: product, quantity: quantity, total: total} )">Add to Cart</button></div>
          </div>
      </div>
  </main>
</template>

<script>
export default {
    name: 'Product', 
    data(){
        return{
            quantity: 0,
            total: 0
        }
    },
    computed: {
        product: function (){
            const object = this.$store.state.products.filter(item => {
            if(this.$route.params.item === item.name) return item;
            })
            return object[0];
        },
        categories: function(){
            return this.product.category;
        },
    },
    methods: {
        mutateQuantity(operation){
            if(this.quantity === 0 && operation === 'minus') return;
            if(this.product.quantity === this.quantity && operation === 'add') return;
            switch(operation){
                case 'minus':
                    this.quantity--;
                    this.total -= this.product.price;
                    break;
                case 'add':
                    this.quantity++;
                    this.total += this.product.price;
                    break;
            }
        }
    },
    mounted(){
    }
}
</script>

<style scoped>
    .product-img{
        height: 491px;
        width: 854px;
        object-fit: cover;
        border-radius: 17px;
    }
    .main-container{
        margin: 5rem 174px;
    }
    .flex-item-2{
        padding: 3rem 5rem;
    }
    .detail-1{
        color: #2D3340;
        text-align: left;
        font-size: 36px;
    }
    .detail-2{
        color: #F5667F;
        text-align: right;
        font-size: 36px;
    }
    .detail-container{
        font-size: 36px;
    }
    .img-container{
        border-radius: 17px;
    }
    .category-container{
        color: #F46D85;
        font-size: 14px;
        margin-top:5px;
    }
    .product-description{
        color: #868686;
        text-align: left;
        font-size:14px;
        font-style: italic;
        text-align: justify;
    }
    .button-quantity{
        position:absolute;
        margin-top: 80px;
    }
    .button-decrement{
        width: 52px;
        height: 48px;
        background-color: #2d3340;
        border-radius: 6px 0px 0px 6px;
        color: #fff;
        font-weight: bold;
        font-size: 24px;
    }
    .button-increment{
        width: 52px;
        height: 48px;
        background-color: #2d3340;
        border-radius: 0px 6px 6px 0px;
        color: #fff;
        font-weight: bold;
        font-size: 24px;
    }
    .quantity-input{
        width: 78px;
        height: 48px;
        background: #F5EBEB;
        border-radius: 0px;
        text-align: center;
        outline: none;
        font-weight: bold;
        font-size: 24px;
        color: #000;
        
    }
    .cart-button {
        width:253px;
        height:58px;
        position:absolute;
        background: #F5667F;
        color: #FFFFFF;
        top: 606px;
        font-weight: bold;
        font-size: 24px;
        left: 1107px;
        border-radius: 6px;
    }
    input, button{
        border: none;
        border-color: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
</style>