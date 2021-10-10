const isBefore = (date, other) => date > other;

const isAfter = (date, other) => date < other


const isSameDate = (date, other) => date.toDateString() === other.toDateString()


const isYearBefore = (dateNow, other) => {
    const copiedOther = new Date(other);
    const aYearAfter = copiedOther.setFullYear(copiedOther.getFullYear() + 1);
    return dateNow <= aYearAfter;
}


const hasWarranty = (dateNow, item) => {
    return item != undefined ? isYearBefore(dateNow, item.purchaseDate) : false


}


const allHasWarranty = (dateNow, items) => {
    const checkWarranty = (item) => hasWarranty(dateNow, item)
    return items.every(checkWarranty);
}



const getWarrantyCloseToExpire = (dateNow, items) => {
    const CloseToExpire = (previous, current) => {
        if (hasWarranty(dateNow, current)) {
            const previousItem = previous[0];
            if (previousItem === undefined) {
                return [current]
            } else if (isBefore(previousItem.purchaseDate, current.purchaseDate)) {
                return [current]
            } else if (isSameDate(previousItem.purchaseDate, current.purchaseDate)) {
                return [...previous, current]
            }
        }
        return previous

    }


    return items.reduce(CloseToExpire, []);
}






const appliances = [{ description: 'hp pavillion 2021', purchaseDate: new Date('2021, 09, 12') },
{ description: 'Garrett GTX 5533R Gen II turbocharger', purchaseDate: new Date('2021, 09, 12') },
{ description: 'COBB Accessport & ECU Tuning', purchaseDate: new Date('2021, 10, 10') }
]

//test
console.log(allHasWarranty(new Date("10-10-2021"), appliances));
console.log(getWarrantyCloseToExpire(new Date("10-10-2021"), appliances));




// function printList(items) {
//     const print = (item) => {
//         console.log(`Item description: ${item.description}`)
//         console.log(`Item expDate: ${item.purchaseDate.toDateString()} \n`)
//     }
//     items.map(print);
// }
