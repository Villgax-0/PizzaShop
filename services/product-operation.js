//Products CRUD Operaton
// Create-c, Read-R, U-Update, Delete-D
import product from "../models/product.js";
import doNetworkcall from "./api-client.js";
async function readAllProducts() {
  try {
    const obj = await doNetworkcall();
    const pizzas = obj["Vegetarian"];
    const productarray = pizzas.map((pizza) => {
      const pizzaObject = new product(
        pizza.id,
        pizza.name,
        pizza.menu_description,
        pizza.price,
        pizza.url,
      );      
      return pizzaObject;
    });
    console.log(productarray);
    return productarray;
  } catch (err) {
    throw err;
  }
}

export default readAllProducts;