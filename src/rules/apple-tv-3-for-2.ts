import { PricingRule, Product } from "../@types";

export class AppleTV3For2 implements PricingRule {
  apply(products: Product[]): number {
    let discount = 0;
    // filter out apple TVs in the cart
    const appleTVs = products.filter(p => p.sku === 'atv');

    // if the number of apple TV is less than 3, no discount
    if (appleTVs.length >= 3) {
      // calculate the number of free apple TVs: 1 out of every 3
      const discountedCount = Math.floor(appleTVs.length / 3);
      console.log("free apple tv", discountedCount)
      discount = discountedCount * appleTVs[0].price;
    }
    console.log("apple tv discount", discount)
    return discount;
  }
}
