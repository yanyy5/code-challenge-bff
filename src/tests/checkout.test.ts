import { PricingRule } from "../@types";
import { Checkout } from "../checkout";
import { AppleTV3For2 } from "../rules/apple-tv-3-for-2";
import { iPadBulkDiscount } from "../rules/ipad-bulk-discount";

const pricingRules: PricingRule[] = [];
pricingRules.push(new AppleTV3For2());
pricingRules.push(new iPadBulkDiscount());

describe('Checkout system', () => {
  it('should apply the 3-for-2 deal on Apple TVs', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).toBe(249.00);
  });

  it('should apply the bulk discount on iPads', () => {
    const co = new Checkout(pricingRules);
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('atv');
    co.scan('ipd');
    co.scan('ipd');
    co.scan('ipd');
    expect(co.total()).toBe(2718.95);
  });
});
