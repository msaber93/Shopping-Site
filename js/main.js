// Quick view for each product

var cart = [];
let products = [
  {
    id: "1",
    name: "Adidas Shirt",
    price: "$45",
    img: "product1",
    addedToCart: false,
  },
  {
    id: "2",
    name: "Metal Bottle",
    price: "$10",
    img: "product2",
    addedToCart: false,
  },
  {
    id: "3",
    name: "Sunglasses",
    price: "$50",
    img: "product3",
    addedToCart: false,
  },
  {
    id: "4",
    name: "Black Hat",
    price: "$8",
    img: "product4",
    addedToCart: false,
  },
  {
    id: "5",
    name: "BackPack",
    price: "$40",
    img: "product5",
    addedToCart: false,
  },
  {
    id: "6",
    name: "Athletic shoe",
    price: "$80",
    img: "product6",
    addedToCart: false,
  },
];

// loop to create products
// loop
// html factory function
// add html to document

function createProducts() {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  products.forEach((product) => {
    const addToCartClass = product.addedToCart ? "bg-success" : "bg-secondary";
    const productHtml = `
        <div class="shop-card">
            <img src="/img/${product.img}.jpg" alt="">
            <h3>${product.name}</h3>
            <span id="price">${product.price}</span>
            <button class="button width-100 bg-primary" data-prod-id="${product.id}" onclick="viewProduct(event)">Quick View</button>
            <button class="button width-100 ${addToCartClass}"  data-prod-id="${product.id}"  onclick="toggleCart(event)">Add to Cart</button>
        </div>
        `;
    productsContainer.innerHTML += productHtml;
  });
}
const popup = document.getElementById("product-popup");
const overlay = document.getElementById("overlay");

function viewProduct(event) {
  const product = products.find(
    (product) => product.id === event.target.dataset.prodId
  );
  if (product) {
    popup.innerHTML = `
    <div class="popup-title">
      <h2>Product</h2>
      <span class="button" onclick="closePopup()">X</span>
    </div>
    <div class="popup-body">
      <img src="/img/${product.img}.jpg" alt="" id="image">
      <h3 id="pop-title">${product.name}</h3>
      <span id="pop-price">${product.price}</span>
    </div>
    <div class="popup-footer">
      <button class="button bg-light" onclick="closePopup()">Close</button>
      <button class="button bg-secondary">Add to Cart</button>
    </div>
    `;
  }

  popup.classList.remove("d-none");
  overlay.classList.remove("d-none");
}

function closePopup() {
  popup.classList.add("d-none");
  overlay.classList.add("d-none");
}

function toggleCart(event) {
  const product = products.find(
    (product) => product.id === event.target.dataset.prodId
  );
  console.log(event);
  products = products.map((product) => {
    if (product.id === event.target.dataset.prodId) {
      product.addedToCart = !product.addedToCart;
    }
    return product;
  });

  cart.push(product);
  updateCart();
  createProducts();
}

const cartNumber = document.getElementById("cart-number");

function updateCart(element) {
  element = cartNumber.innerText;
  cartNumber.innerHTML = +element + 1;
}

createProducts();
