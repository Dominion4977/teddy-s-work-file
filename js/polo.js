function FullView(ImgLink){
  document.querySelector("#FullImage").src = ImgLink;
  document.querySelector("#FullImageView").style.display = 'block';
  console.log('picture viewed')
}
function closeFullimage(){
  document.querySelector('#FullImageView').style.display = "none"
};

const products = [{
  image:"../polo/1 (1).jpg",
  name:"LARGE DIOR PACKET SHIRT",
  rating:{
stars:"../ratings/rating-50.png" ,
count:126,
  },
  priceScent:1003,
  // this is the text inside the button
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (10).jpg",
  name:"LARGE VENDI PACKET SHIRT",
  rating:{
stars:"../ratings/rating-40.png",
count:16,
  },
  priceScent:1501,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (11).jpg",
  name:"LARGE GUCCI PACKET SHIRT",
  rating:{
stars:"../ratings/rating-35.png" ,
count:155,
  },
  buttonaddtocart: 'add to cart',
  priceScent:2032,
},
{
  image:"../polo/1 (12).jpg",
  name:"LARGE GUCCI PACKET SHIRT",
  rating:{
stars: "../ratings/rating-50.png" ,
count:176,
  },
  priceScent:1202,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (13).jpg",
  name:"LARGE GUCCI PACKET SHIRT",
  rating:{
stars: "../ratings/rating-25.png" ,
count:116,
  },
  priceScent:2342,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (14).jpg",
  name:"LARGE GUCCI PACKET SHIRT",
  rating:{
stars:"../ratings/rating-45.png" ,
count:106,
  },
  priceScent:3932,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (15).jpg",
  name:"LARGE GUCCI PACKET SHIRT",
  rating:{
stars: "../ratings/rating-45.png" ,
count:145,
  },
  priceScent:1232,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (17).jpg",
  name:"LARGE ITALIA PACKET SHIRT",
  rating:{
stars: "../ratings/rating-40.png",
count:226,
  },
  priceScent:1932,
  buttonaddtocart: 'add to cart',
},
{
  image:"../polo/1 (18).jpg",
  name:"LARGE BALENCIAGA PACKET SHIRT",
  rating:{
stars: "../ratings/rating-35.png" ,
count:137,
  },
  priceScent:1032,
  buttonaddtocart: 'add to cart'
},
{
  image:"../polo/1 (19).jpg",
  name:"LARGE BALENCIAGA PACKET SHIRT",
  rating:{
stars: "../ratings/rating-35.png" ,
count:123,
  },
  priceScent:3232,
  buttonaddtocart: 'add to cart'
},
];

let productsHTML = '';

products.forEach((product) => {
productsHTML +=`
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
            <div class="product-price">$${(product.priceScent/100).toFixed(2)}</div>
            <select name="numbers" id="numbers">
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
            </select>
          </div>
          <button
           class="add-to-cart-btn js-add-btn">${product.buttonaddtocart}</button>
        </div>
 `;
})

document.querySelector('.js-product-overall').innerHTML = productsHTML;

