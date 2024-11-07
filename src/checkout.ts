import { PricingRule, Product } from "./@types";
import { products } from "./data";
import { roundPrice } from "./utils/roundPrice";

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
        this.cartProducts.push(foundProduct);
    }

    total(): number {
        // we adopt the strategy that calculate the deducted price from all rules first,
        // and use the original total price - deducted price.
        const originalTotalPrice = roundPrice(this.cartProducts.reduce((sum, product) => sum + product.price, 0));
        
        const deductPriceFromRules = roundPrice(this.pricingRules.reduce((sum, pricingRule)=> sum + pricingRule.apply(this.cartProducts), 0));
        
        const discountedPrice = roundPrice(originalTotalPrice - deductPriceFromRules);
        
        return discountedPrice;
    }
}