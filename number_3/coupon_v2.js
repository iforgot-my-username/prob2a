const getPrice = (item) => typeof item === 'number' ? item : item.price;
const isMatch = (regExp, str) => str.match(regExp) != null;
const round = (num, places) => Number.isInteger(num) ? num : Math.round(num * 10 ** places) / 10 ** places;

const billOut = (cart, applyCoupon) => {
    const discount = 0.15;
    const addAllPrice = (total, current) => {
        const microsoft = /microsoft/gi;
        let microsoftProducts = 0;
        let microsoftProductsPrice = 0;
        if (isMatch(microsoft, current.seller)) {
            microsoftProducts++;
            microsoftProductsPrice += current.price;
        }
        return total != undefined ? {
            microsoftProducts: total.microsoftProducts + microsoftProducts,
            microsoftProductsPrice: microsoftProductsPrice + total.microsoftProductsPrice,
            bill: current.price + total.bill
        } :
            {
                microsoftProducts: microsoftProducts,
                microsoftProductsPrice: microsoftProductsPrice,
                bill: current.price
            };
    }
    const summary = cart.reduce(addAllPrice, undefined);
    if (applyCoupon && summary.microsoftProducts >= 3 && summary.microsoftProductsPrice > 6000) {
        return round(summary.bill - (summary.bill * discount), 2)
    }
    return round(summary.bill);
}


const cart1 = [
    { productName: 'microsoft word', seller: 'microsoft', price: 1500 },
    { productName: 'microsoft powerPoint', seller: 'microsoft', price: 3000 },
    { productName: 'microsoft powerPoint', seller: 'microsoFt', price: 2000 },
    { productName: 'adobe dc', seller: 'adobe', price: 300 },
]
console.log('total bill: ', billOut(cart1, true));
