import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {id: 1, name: "Bacon",price:250,quantity:10, category: ["Meat"],img:'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg', details: "Relish the best-tasting Swift Delicious Bacon that is made from thin slices of distinctly smoke bacon goodness everybody craves for.Ingredients List: Pork Belly cured with Water, Iodized Salt, Sugar, MSG (Flavor Enhancer), Sodium Tripolyphosphate (Water Retention Agent), Sodium Erythorbate (Antioxidant) and Sodium Nitrite (Preservative)"},
      {id: 2, name: "Fish",price:150,quantity:5, category: ["Seafood","Fresh"],img:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg', details: "Fish are aquatic cold-blooded vertebrates found both at sea and in freshwater. Many edible fish are great sources of nutrients, including omega-3 fatty acids, protein, B vitamins, iodine, and calcium"},
      {id: 3, name: "Chicken",price:200,quantity:9, category: ["Poultry","Fresh"],img:'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg', details: "Chicken can be prepared in a vast range of ways, including baking, grilling, barbecuing, frying, and boiling. Since the latter half of the 20th century, prepared chicken has become a staple of fast food. Chicken is sometimes cited as being more healthful than red meat, with lower concentrations of cholesterol and saturated fat"},
      {id: 4, name: "Beef",price:300,quantity:11, category: ["Meat"],img:'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg', details: "Beef can be prepared in various ways; cuts are often used for steak, which can be cooked to varying degrees of doneness, while trimmings are often ground or minced, as found in most hamburgers. Beef contains protein, iron, and vitamin B12."},
      {id: 5, name: "Soy Sauce",price:50,quantity:0, category: ["Sauce","Seasoning"],img:'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024', details: "Soy sauce is a liquid condiment of Chinese origin, traditionally made from a fermented paste of soybeans, roasted grain, brine, and Aspergillus oryzae or Aspergillus sojae molds. It is considered to contain a strong umami flavor."},
      {id: 9, name: "Egg",price:10,quantity:72, category: ["Dairy"],img:'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg', details: "Eggs play an important role in everything from cakes and cookies to meringues and pastry cream — they create structure and stability within a batter, they help thicken and emulsify sauces and custards, they add moisture to cakes and other baked goods, and can even act as glue or glaze."},
      {id: 11, name: "Pork",price:200,quantity:12, category: ["Meat"],img:'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg', details: "Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork."},
    ],
    cart: []
  },
  mutations: {
    addToCart(state, {product, quantity, total}){
      let index = 0;
      if(state.cart.some(el => {
        const decider = el.product.product.id === product.id;
        el.quantity+= quantity;
        el.price = product.price * el.quantity;
        // console.log(state.cart);
        return decider;
      })) return;
      if(quantity <= 0) {
        alert(`Error in adding to cart`);
        return;
      }
      const pushToCart = {
        product: {product},
        quantity: quantity,
        price: total
      }
      state.cart.push(pushToCart);
      
      console.log(state.cart);
    }
  },
  actions: {
  },
  modules: {
  }
})
