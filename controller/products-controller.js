import product from "../models/product.js";
import readAllProducts from "../services/product-operation.js";
async function showProducts() {
  const products = await readAllProducts();
  console.log("Controller received: ", products);
  for (let product of products) {
    PrintPizza(product);
  }
}  let totalPrice = 0;
   
   function printbasket(product){
    const basketCardsContainer = document.getElementById("basket");
     
       const basketItem = document.createElement("div");
      basketItem.className = "basket-item";
    basketItem.innerText = `${product.name} - ₹${product.price}`;
        basketCardsContainer.appendChild(basketItem);
        totalPrice += parseInt(product.price);
        const totalPriceElement = document.getElementById("total-price");
        const gstPriceElement = document.getElementById("gst");
        const netPriceElement = document.getElementById("net-price");
        totalPriceElement.textContent = totalPrice;
        let gst =0.18*parseInt(totalPrice);
        gstPriceElement.textContent = gst;
        netPriceElement.textContent = totalPrice+gst;
        updatePayNowButtonState();
   }
function PrintPizza(product) {
  const colDiv = document.createElement("div");
  colDiv.className = "col-4";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.style = "width:18rem;";
  colDiv.appendChild(cardDiv);

  const img = document.createElement("img");
  img.src = product.url;
  cardDiv.appendChild(img);

  const CardBody = document.createElement("div");
  CardBody.className = "card-body";
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = product.name +" ₹" + product.price;
  const pTag = document.createElement("p");
  pTag.innerText = product.desc;
  pTag.className = "card-text";
  const button = document.createElement('button');
  button.setAttribute('product-name',product.name);
  button.addEventListener('click',()=>printbasket(product));
  button.innerText='Add To Cart';
  button.className='btn btn-primary';


  CardBody.appendChild(button);
  CardBody.appendChild(h5);
  CardBody.appendChild(pTag);
  
  cardDiv.appendChild(CardBody);

  const outputDiv = document.querySelector("#output");
  outputDiv.appendChild(colDiv);
}
function updatePayNowButtonState() {
  const basketItems = document.getElementsByClassName("basket-item");
  const payNowButton = document.getElementById("payNowButton");

  if (basketItems.length > 0) {
    payNowButton.disabled = false;
  } else {
    payNowButton.disabled = true;
  }
}
showProducts();