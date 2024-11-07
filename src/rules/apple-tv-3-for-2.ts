import { PricingRule, Product } from "../@types";

export class AppleTV3For2 implements PricingRule {
  apply(products: Product[]): number {
    // return a random number
    return 100;
  }
}
