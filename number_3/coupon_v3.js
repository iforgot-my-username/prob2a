

const getPrice = (item) => typeof item === 'number' ? item : item.price;
const isMatch = (regExp, str) => str.match(regExp) != null;
const round = (num, places) => Number.isInteger(num) ? num : Math.round(num * 10 ** places) / 10 ** places;

const billOut = (cart, applyCoupon) => {
    let microsoftCount = 0;
    let microsoftProductsTotal = 0;
    let total = 0;
    const microsoft = /microsoft/gi;
    cart.forEach(element => {
        if (isMatch(microsoft, element.seller)) {
            microsoftCount++;
            microsoftProductsTotal += element.price;
        }
        total += element.price;
    });
    const discount = 0.15;
    if (applyCoupon && microsoftCount >= 3 && microsoftProductsTotal >= 6000) {
        return round(total - (total * discount));
    }
    return total;
}


//test =>>>>>
const cart1 = [
    { productName: 'microsoft word', seller: 'microsoft', price: 6500 },
    { productName: 'microsoft powerPoint', seller: 'microsoft', price: 200 },
    { productName: 'microsoft powerPoint', seller: 'microsoFt', price: 300 },
    { productName: 'adobe dc', seller: 'adobe', price: 300 },
];
console.log(billOut(cart1, true));