<template>
  <div class="flex flex-1 space-margin">
    <div class="flex-2 flex item">
      <div class="flex flex-2">
        <div class="flex flex-left">
          <button class="flex-1 remove">x</button>
          <div class="flex-2">
            <img :src="item.img" alt="" />
          </div>
        </div>
        <h6 class="flex-right">{{ item.name }}</h6>
      </div>
      <h6 class="flex-1">
        {{
          product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "PHP",
          })
        }}
      </h6>
      <div class="flex-1 quantity-button">
        <button @click="mutateQuantity('minus')" class="button-decrement">
          -
        </button>
        <input
          type="number"
          v-model="product.quantity"
          min="0"
          :max="item.quantity"
          class="quantity-input"
        />
        <button @click="mutateQuantity('add')" class="button-increment">
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: {
    product: Object,
  },
  methods: {
    mutateQuantity(operation) {
      if (this.product.quantity === 0 && operation === "minus") return;
      if (this.item.quantity === this.product.quantity && operation === "add")
        return;
      switch (operation) {
        case "minus":
          this.product.quantity--;
          this.product.price = this.item.price * this.product.quantity;
          break;
        case "add":
          this.product.quantity++;
          this.product.price = this.item.price * this.product.quantity;
          break;
      }
    },
  },
  computed: {
    item: function () {
      return this.product.product.product;
    },
  },
  mounted() {
    console.log(this.product.quantity);
  },
};
</script>

<style scoped>
h6,
p {
  font-size: 2rem;
  color: #2d3340;
  line-height: 3em;
}
img {
  width: 96px;
  height: 96px;
  object-fit: cover;
}

input,
button {
  border: none;
  border-color: none;
}
.flex-left {
  flex: 1;
}
.flex-right {
  flex: 2;
  text-align: left;
}
.space-margin {
  margin: 1rem 0;
}
.remove {
  background-color: transparent;
  color: #f5667f;
  font-size: 2rem;
  font-weight: 600;
  border: none;
}
.button-decrement {
  width: 52px;
  height: 48px;
  background-color: #2d3340;
  border-radius: 6px 0px 0px 6px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}
.button-increment {
  width: 52px;
  height: 48px;
  background-color: #2d3340;
  border-radius: 0px 6px 6px 0px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
}
.quantity-input {
  width: 78px;
  height: 48px;
  background: #f5ebeb;
  border-radius: 0px;
  text-align: center;
  outline: none;
  font-weight: bold;
  font-size: 24px;
  color: #000;
}
.quantity-button {
  align-items: center;
  margin-top: 25px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>