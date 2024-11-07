import { PricingRule, Product } from "./@types";
import { products } from "./data";

export class Checkout {
    private cartProducts: Product[] = [];
    private pricingRules: PricingRule[];

    constructor(pricingRules: PricingRule[]){
        // set up multiple rules for a checkout system
        this.pricingRules = pricingRules;
    }

    scan(sku: string): void {
        // check if the scanned product is valid
        const foundProduct = products.find((product)=> product.sku === sku);
        
        // throw error if the product does not exist
        if (!foundProduct) {
            throw new Error("Oops, invalid sku is scanned.")
        }

        // add it to cart
        console.log(`item ${sku} is scanned`);
        this.cartProducts.push(foundProduct);
    }

    total(): number {
        // we adopt the strategy that calculate the deducted price from all rules first,
        // and use the original total price - deducted price.
        const originalTotalPrice = this.cartProducts.reduce((sum, product) => sum + product.price, 0)
        console.log("originalTotalPrice", originalTotalPrice);
        const deductPriceFromRules = 9999;
        console.log("deductPriceFromRules", deductPriceFromRules);
        return originalTotalPrice - deductPriceFromRules;
    }
}