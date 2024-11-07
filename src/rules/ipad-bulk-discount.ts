import { PricingRule, Product } from "../@types";

export class iPadBulkDiscount implements PricingRule {
  apply(products: Product[]): number {
    // return a random number
    return 200;
  }
}
