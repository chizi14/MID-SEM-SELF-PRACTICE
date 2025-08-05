function calculateDiscount(originalPrice, discountPercentage) {
    let discountAmount = originalPrice * (discountPercentage / 100);
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}

console.log(calculateDiscount(4800000,0.2));