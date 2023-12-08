const singleProduct = new URLSearchParams(window.location.search);
const productId = singleProduct.get("id");
let singleProductdetails = document.getElementById("abc");
const addToCartButton = document.getElementById("addToCartButton");
const cartDisplay = document.getElementById("cart");

let cart = [];  

function addToCart(product) {
  cart.push(product);
  console.log("Product added to cart:", product);
}
function abc(){
fetch("https://fakestoreapi.com/products").then((data)=>{

return data.json();

    }).then((objectdata)=>{
      console.log(objectdata)
      for(i=0; i < objectdata.length; i++ ){
  
    singleProductdetails.innerHTML = `
      <div class="col-sm-4 offset-2">
        <img src=${objectdata[i].image} alt="hello">
      </div>
      <div class="col-sm-4 mt-2">
        <h4 class="mt-4">p${objectdata[i].title}</h4>
        <p>Price: $${objectdata[i].price}</p>
        <button type="button" class="btn btn-primary mt-5" id="addtocart">Add to Cart <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
      </div>`
   
    addToCartButton.addEventListener("click", () => {
      addToCart(productdetails);
      updateCartDisplay();
    
    });
  }})
}
  

