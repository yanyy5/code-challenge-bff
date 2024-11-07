import { Checkout } from "./checkout";
import { products } from "./data";
import { AppleTV3For2 } from "./rules/apple-tv-3-for-2";
import { iPadBulkDiscount } from "./rules/ipad-bulk-discount";

// set up rules
const rules = [];
rules.push(new AppleTV3For2());
rules.push(new iPadBulkDiscount());

// set up checkout system
const co = new Checkout(rules);

// scan random products
co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("atv");
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");

// calculate total price
const totalPrice = co.total();

console.log("totalPrice", totalPrice)