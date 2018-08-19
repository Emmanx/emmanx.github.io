const cart = JSON.parse(localStorage.getItem('cart'));
if (cart === null || cart.length === 0) {
  document.querySelector('.cart-item').innerText = `0 Items`;
} else {
  document.querySelector('.cart-item').innerText = `${cart.length} Items`;
}


document.body.addEventListener('click', quickView);

let productName,
    productImage,
    productPrice,
    productOldPrice;

function quickView(e) {

  if (e.target.parentElement.classList.contains('btn-product-qview')) {
    productName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].firstElementChild.firstElementChild.textContent;

    productImage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].firstElementChild.firstElementChild.getAttribute("src");

    productPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].firstElementChild.textContent;

    productOldPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].lastElementChild.textContent;

  } else if (e.target.classList.contains('btn-product-qview')) {
    productName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].firstElementChild.firstElementChild.textContent;

    productImage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].firstElementChild.firstElementChild.getAttribute("src");

    productPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].firstElementChild.textContent;

    productOldPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].lastElementChild.textContent;
  }

  document.querySelector('.product-info h1').textContent = productName;
  document.querySelector('.new-price').textContent = productPrice;
  document.querySelector('.old-price').textContent = productOldPrice;
  document.querySelector('.modal-img').firstElementChild.firstElementChild.setAttribute("src", productImage);
}

document.querySelector('.single_add_to_cart_button').addEventListener('click', function (e) {

  product = {
    name : productName,
    image: `/${productImage}`
  }

  let cart;

  if (localStorage.getItem('cart') === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

  cart.push(product);

  localStorage.setItem('cart', JSON.stringify(cart));

  document.querySelector('.cart-item').innerText = `${cart.length} Items`;

  alert('Item Added')
  e.preventDefault();
});