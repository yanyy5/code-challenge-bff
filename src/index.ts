import { Checkout } from "./checkout";
import { products } from "./data";


const co = new Checkout([]);
co.scan("ipd");
co.scan("ipd");
const totalPrice = co.total();

console.log("totalPrice", totalPrice)