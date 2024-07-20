function FullView(ImgLink) {
  document.querySelector('#FullImage').src = ImgLink;
  document.querySelector('#FullImageView').style.display = 'block';
  console.log('picture viewed');
}
function CloseFullView() {
  document.querySelector('#FullImageView').style.display = 'none';
}

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
        <div class="first-in">
          <img
            src="${product.image}"
            onclick="FullView(this.src)"
          />
          <div class="text">
            <div class="product-name">${product.name}</div>
            <div class="rating-star">
              <img src="../rating-stars file/${product.rating.stars}" />
              <p>${product.rating.count}</p>
            </div>
            <div class="product-price">$${(product.priceScent / 100).toFixed(
              2
            )}</div>
            <select class="js-quantity-selector-${
              product.id
            }" name="numbers" id="numbers">
              <option value=${Number(1)}>${Number(1)}</option>
              <option value=${Number(2)}>${Number(2)}</option>
              <option value=${Number(3)}>${Number(3)}</option>
              <option value=${Number(4)}>${Number(4)}</option>
              <option value=${Number(5)}>${Number(5)}</option>
              <option value=${Number(6)}>${Number(6)}</option>
            </select>
          </div>
          <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="../image/checkmark.png" />
          Added
        </div>
          <button
           class="add-to-cart-btn js-add-btn" data-product-id="${product.id}">${
    product.buttonaddtocart
  }</button>
        </div>
 `;
});
document.querySelector('.js-product-overall').innerHTML = productsHTML;

// USED THE BUTTON TO GET ALL THE ITEMS IN THE JAVASCRIPT
let buttons = document.querySelectorAll('.js-add-btn');
buttons.forEach((event) => {
  event.addEventListener('click', () => {
    const productId = event.dataset.productId;

    let selectElement = parseInt(
      document.querySelector(`.js-quantity-selector-${productId}`).value
    );

    let currentTotal = parseInt(
      document.querySelector('.js-cart-quantity').innerHTML
    );

    let FinalTotal = currentTotal + selectElement;

    document.querySelector('.js-cart-quantity').innerHTML = FinalTotal;

    let addedCart = document.querySelector(`.js-added-to-cart-${productId}`);
    addedCart.style.opacity = 1;
    addedCart.style.display = 'flex';

    setTimeout(() => {
      addedCart.style.opacity = '0';
    }, 2000);
  });
});

//USED THE SEARCHBAR TO GET ALL THE ITEMS IN THE JAVASCRIPT

/*function search(){
  let searchTerms = document.querySelector('.search-bar').value.toLowerCase();
  for(let i = 0; i < products.length; i++){
const valueName = products[i].name;
}
};

/*

// up first
const matchingProducts = valueName.filter((product) =>
  product.toLowerCase().includes(searchTerms)
);

displayResults(matchingProducts);



function displayResults(results) {
  const resultsContainer = document.getElementById("search-bar");
  resultsContainer.innerHTML = "";

  results.forEach((result) => {
    const productElement = document.createElement("div");
    productElement.textContent = result;
    productElement.addEventListener("click", () =>
      displayProduct(result)
    );
    resultsContainer.appendChild(productElement);
  });
}


// to select each button
/*let matchingItem;

cart.forEach((item) => {
if(productId === item.productId){
matchingItem = item;
}
});
if(matchingItem){
  matchingItem.quantity+=1;
} else {
  cart.push({
    productId:productId,
    quantity: 1,
  });
}
let cartQuantity = 0;

cart.forEach((item)=>{
cartQuantity+= item.quantity;
});
*/
//document.querySelector('.js-cart-quantity').innerHTML = cartQuantity

// ANOTHER WAY
/*let buttons = document.querySelectorAll('.add-to-cart-btn');
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
   console.log(buttons[i].dataset.product.name); 
if (event.target.innerHTML === 'add to cart'){
  event.target.innerHTML = 'cart added';
}else{event.target.innerHTML = 'add to cart'}
;  })};*/
