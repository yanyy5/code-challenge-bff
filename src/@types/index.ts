export interface Product {
    sku: string;
    name: string;
    price: number;
}

export interface PricingRule {
    apply(products: Product[]): number;
}
