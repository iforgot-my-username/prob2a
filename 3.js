Date.prototype.isBefore = function isBefore(other) {
    return this > other
}

Date.prototype.isAfter = function isAfter(other) {
    return this < other
}

Date.prototype.isSameDate = function isAfter(other) {
    return this.toDateString() === other.toDateString()
}


Date.prototype.isYearBefore = function isYearBefore(other) {
    let copiedOther = new Date(other);
    const aYearAfter = copiedOther.setFullYear(copiedOther.getFullYear() + 1);
    return this <= aYearAfter;
}

//functions

function hasWarranty(item) {
    return new Date().isYearBefore(item.purchaseDate);
}

function allHasWarranty(items) {
    return items.every(item => hasWarranty(item));
}



function getWarrantyCloseToExpire(items) {
    let result;

    const CloseToExpire = function CloseToExpire(item) {
        if (result === undefined && hasWarranty(item)) {
            result = [item]
        } else if (hasWarranty(item)) {
            let previous = result[0];
            if (previous.purchaseDate.isBefore(item.purchaseDate)) {
                result = [item];
            } else if (previous.purchaseDate.isSameDate(item.purchaseDate)) {
                result.push(item)
            }

        }
    }

    items.filter(CloseToExpire);
    return result;
}






const appliances = [{ description: 'hp pavillion 2021', purchaseDate: new Date('2021, 09, 12') },
{ description: 'Garrett GTX 5533R Gen II turbocharger', purchaseDate: new Date('2021, 09, 13') },
{ description: 'COBB Accessport & ECU Tuning', purchaseDate: new Date('2020, 09, 10') }
]

//test
console.log(allHasWarranty(appliances));
printList(getWarrantyCloseToExpire(appliances));




function printList(items) {
    const print = (item) => {
        console.log(`Item description: ${item.description}`)
        console.log(`Item expDate: ${item.purchaseDate.toDateString()} \n`)
    }
    items.map(print);
}