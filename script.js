let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */

function addToCart(productName, price){

  let product = {
    name: productName,
    price: price
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(productName + " added to cart!");
}

/* DISPLAY CART ITEMS */

function displayCart(){

  let cartContainer = document.getElementById("cart-items");

  let totalContainer = document.getElementById("total-price");

  if(!cartContainer) return;

  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    cartContainer.innerHTML += `

      <div class="cart-card">

        <h3>${item.name}</h3>

        <p>$${item.price}</p>

        <button onclick="removeItem(${index})">
          Remove
        </button>

      </div>

    `;
  });

  totalContainer.innerHTML = "$" + total;
}

/* REMOVE ITEM */

function removeItem(index){

  cart.splice(index,1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

/* RUN CART */

displayCart();

/* PLACE ORDER */

function placeOrder(event){

  event.preventDefault();

  alert("Order placed successfully!");

  localStorage.removeItem("cart");

  window.location.href = "index.html";
}