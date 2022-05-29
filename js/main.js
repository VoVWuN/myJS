class ProductList {
    constructor(container = ".products") {
      this.container = container;
      this.goods = [];
      this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
      this.render(); //вывод товаров на страницу
      this.totalProductPrice = 0;
    }
    _fetchProducts() {
      this.goods = [
        { id: 1, title: "Notebook", price: 2000, img: "images/notebook" },
        { id: 2, title: "Mouse", price: 20, img: "images/mouse" },
        { id: 3, title: "Keyboard", price: 200, img: "images/keyboard" },
        { id: 4, title: "Gamepad", price: 50, img: "images/gamepad"},
      ];
    }
  
    render() {
      const block = document.querySelector(this.container);
      for (let product of this.goods) {
        const item = new ProductItem(product);
        block.insertAdjacentHTML("beforeend", item.render());
        // block.innerHTML += item.render();
      }
    }
  
    getTotalProoductsPrice() {
      for (let i = 0; i < this.goods.length; i++) {
        this.totalProductPrice += this.goods[i].price;
      }
      return this.totalProductPrice;
      // console.log(
      //   `Суммарная стоимость всех товаров равна ${this.totalProductPrice}`
      // );
    }
  }
  
  class ProductItem {
    constructor(product) {
      this.title = product.title;
      this.id = product.id;
      this.price = product.price;
      this.img = product.img;
    }
    render() {
      return `<div class="product-item">
                  <img src=${this.img}>
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                  <button class="buy-btn">Купить</button>
              </div>`;
    }
  }
  
  class CartList {
    constructor(container = ".cart") {
      this.container = container;
      this.goodsInCart = [];
    }
  
    renderCart() {
      this.container.insertAdjacentHTML("beforeend", `<ul class"cartList"></ul>`);
    }
  
    addItemToCartList(cartItem) {
      this.cartItem = cartItem;
      this.count = 0;
    }
  
    renderProductsIncart() {}
  
    renderNewProductsInCart() {}
  
    removeProductFromCart() {}
  
    getTotalCartCount() {}
  
    getTotalCartPrice() {}
  }
  
  class CartItem extends ProductItem {
    constructor(product) {
      super(product);
      this.count = 0;
    }
  
    createCartItem() {
      const cartItem = new CartItem(product);
      return cartItem;
    }
  
    render() {
      return `<li class="cart__item">
                <img src=${this.img}>
                <h3>${this.title}</h3>
                <p>${this.price}</p>
              </li>`;
    }
  }
  
  let list = new ProductList();
  
  list.getTotalProoductsPrice();
  
  const cart = new CartList();