<template>
  <main>
    <div>
      <h1 class="page-name">My Cart</h1>
      <div class="flex flex-col details-container">
        <div class="flex flex-1">
          <div class="flex-2 table-header">Item Name</div>
          <div class="flex-1 table-header">Unit Price</div>
          <div class="flex-1 table-header">Quantity</div>
        </div>
        
        <div class="" v-if="cart.length !== 0">
          <CartProduct v-for="product in cart" :key="product.id" :product="product"/>
          <hr>
          <div class="items flex flex-1">
            <h4 class="coupon-text">Coupon<input class="coupon-input" type="text" v-model="coupon"></h4>
            <button class="apply-coupon" @click="testCoupon">Apply</button>
            
          <div class="prices flex-1">
            <p class="total">
              Total: 
              <span class="price">
                {{total.toLocaleString("en-US", {style: 'currency', currency: 'PHP'})}}
                </span>
            </p>
            <p>
              Discounted Price: {{discountTotal.toLocaleString("en-US", {style: 'currency', currency: 'PHP'})}}
            </p>
          </div>
          </div>
          <div>
            <p>{{msg}}</p>
            <div class="cash-box">
              <h4>Cash<input class="coupon-input" type="number" v-model="cash"></h4>
              <button class="checkout" @click="checkout">Checkout</button>
            </div>
          </div>
        </div>
        <div class="else" v-else>
          no items :c
        </div>
        
      </div>
    </div>
  </main>
</template>

<script>
import CartProduct from '@/components/CartProduct.vue';
export default {
  components: {
    CartProduct
  },
  data(){
      return{
          // quantity: 0,
          // total: this.total,
          discount: 1,
          coupon: '',
          msg: '',
          cash: 0,
          usedDiscount: false,
          discountTotal: 0
      }
  },
  methods: {
    testCoupon(){
      if(this.usedDiscount) {
        alert('You already used a coupon');
        return;
      }
      const coupons =  ['menu50', 'menu20', 'menu10', 'menu200flat'];
      const coupon = coupons.find(e => e === this.coupon);
      let discount;
      let msg = '';
      coupons.forEach(e => {
        if(e === coupon) discount = parseInt(coupon.replace(/[^0-9.]/g, "")) * 0.01;
      });
      if (discount !== undefined){
        if(discount !== 2){
          this.discountTotal = this.total * discount;
          msg = `Applied ${discount *100}% discount!`;
        }
        if(discount === 2 && this.cart.total >= 1000){
          this.discountTotal = this.total * 200;
          msg = `Applied ${discount *100} off discount!`;
        }
      } else {
        alert('Invalid coupon');
        return;
      }
      this.discount = discount;
      this.msg = msg;
      this.coupon = '';
      this.usedDiscount = true;
      console.log(this.cart.total);
    },
    checkout(){
      if(this.cash < 0 && this.$store.state.cart.length > 0) {
          alert("Please input valid amount");
          return;
        }
        if(this.$store.state.cart.length <= 0) {
          alert("No items to checkout");
          return;
        }
        if(this.cash >= this.discountTotal){
          this.$store.state.cart = [];
          this.$router.push('/checkout');
        }
    }
  },
  computed: {
    cart: function (){
      return this.$store.state.cart;
    },
    quantity: function(){
        const cart = this.$store.state.cart;
        let quantity = 0;
        cart.forEach(e => {
            quantity += e.quantity;
        });
        return quantity;
    },
    total: function(){
        const cart = this.$store.state.cart;
        let total = 0;
        cart.forEach(e => {
            total += e.price;
        });
        return total;
    }
  }
}
</script>

<style scoped>
.page-name{
  color: #F5667F;
  font-size: 36px;
}
.details-container{
  margin-top:40px;
  font-size:24px;
}
.table-header{
  font-size: 24px;
  color: #2d3340;
}
h6, h4{
  font-size:24px;
  margin: 4rem;
  color: #2d3340;
}
hr {
  width: 1050px;
  margin-left: 442px;
}
h4{
  font-size:24px;;
}
p{
  font-size:24px;
  color: #2d3340;
}
.price{
  font-size:24px;
  color: #F5667F;
}
.else{
  color:#000;
  font-size:24px;
  margin-top:40px;
}
.coupon-text {
  font-weight:normal;
  color: #000;
}
.coupon-input {
  width: 213px;
  height: 47px;
  background: #F5EBEB;
  border-radius: 6px;
  box-shadow:0;
  border: 0;
  margin-left: 16px;
  font-size: 18px;
  color: #000;
  padding: 15px;
}
.coupon-input:active:focus{
  border:0;
}
.apply-coupon {
  margin-top:63px;
  width: 135px;
  height: 47px;
  background: #F5667F;
  border-radius: 6px;
  color:white;
  font-weight:bold;
  font-size: 24px;
  box-shadow:0;
  border: 0;
}
.checkout {
  width: 253px;
  height: 58px;
  background: #F5667F;
  border-radius: 6px;
  color: #fff;
  font-weight:bold;
  font-size: 24px;
  box-shadow:0;
  border: 0;
  margin-top:-90px;
  margin-left: 45px;
}
.items {
  margin-left:320px;
}
.prices {
  margin-top:63px;
  text-align: right;
  margin-right: 375px;
}
.cash-box {
  margin-left: 880px;
  margin-top:-50px;
}
</style>