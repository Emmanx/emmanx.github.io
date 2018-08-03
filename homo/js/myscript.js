document.body.addEventListener('click', quickView);

function quickView(e) {

  if (e.target.parentElement.classList.contains('btn-product-qview')) {
    var productName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].firstElementChild.firstElementChild.textContent;

    var productImage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].firstElementChild.firstElementChild.getAttribute("src");

    var productPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].firstElementChild.textContent;

    var productOldPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].lastElementChild.textContent;

  } else if (e.target.classList.contains('btn-product-qview')) {
    var productName = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[0].firstElementChild.firstElementChild.textContent;

    var productImage = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].firstElementChild.firstElementChild.getAttribute("src");

    var productPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].firstElementChild.textContent;

    var productOldPrice = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].lastElementChild.textContent;
  }

  document.querySelector('.product-info h1').textContent = productName;
  document.querySelector('.new-price').textContent = productPrice;
  document.querySelector('.old-price').textContent = productOldPrice;
  document.querySelector('.modal-img').firstElementChild.firstElementChild.setAttribute("src", productImage);
}