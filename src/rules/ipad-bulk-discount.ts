import { PricingRule, Product } from "../@types";
import { roundPrice } from "../utils/roundPrice";

const IPAD_DISCOUNT_PRICE = 499.99;

export class iPadBulkDiscount implements PricingRule {
  apply(products: Product[]): number {
    let discount = 0;
    // filter out apple TVs in the cart
    const ipads = products.filter(p => p.sku === 'ipd');

    // discount will be applited only when the number of ipads is more then 4
    if (ipads.length > 4) {
      discount = roundPrice((ipads[0].price - IPAD_DISCOUNT_PRICE) * ipads.length);
    }
    
    console.log("ipad discount", discount)
    return discount;
  }
}
