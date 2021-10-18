const getPrice = (item) => typeof item === 'number' ? item : item.price;
const isMatch = (regExp, str) => str.match(regExp) != null;
const round = (num, places) => Number.isInteger(num) ? num : Math.round(num * 10 ** places) / 10 ** places;

const billOut = (cart, applyCoupon) => {
    let microsoftProducts = 0;
    let microsoftProductsPrice = 0;
    const discount = 0.15;
    const addAllPrice = (total, current) => {
        const totalPrice = getPrice(total);
        const currentPrice = getPrice(current);
        const microsoft = /microsoft/gi;

        if (isMatch(microsoft, current.seller)) {
            microsoftProducts++;
            microsoftProductsPrice += current.price;
        }
        return totalPrice + currentPrice;
    }

    const summary = cart.reduce(addAllPrice, 0);
    if (applyCoupon && microsoftProducts >= 3 && microsoftProductsPrice > 6000) {
        return round(summary - (summary * discount), 2);
    }
    return round(summary);


}

//test =>>>>>
const cart1 = [
    { productName: 'microsoft word', seller: 'microsoft', price: 1500 },
    { productName: 'microsoft powerPoint', seller: 'microsoft', price: 3000 },
    { productName: 'microsoft powerPoint', seller: 'microsoft', price: 2000 },
];


console.log('total bill: ', billOut(cart1, true));