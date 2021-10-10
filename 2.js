
Date.prototype.isAfter = function isAfter(other) {
    return this < other
}

function hasExpiredItem(items) {
    const isExpired = item => item.expDate.isAfter(new Date());
    return items.some(isExpired);
}

function getExpiredItem(items) {
    const isExpired = item => item.expDate.isAfter(new Date());
    return items.filter(isExpired);
}

// testing
const shelf1 = [{ description: 'canned meat', expDate: new Date('2024, 09, 10') },
{ description: 'angelina loaf bread', expDate: new Date('2023, 01, 14') },
{ description: 'lucky me noodles', expDate: new Date('2022, 03, 13') }
]

const shelf2 = [{ description: 'canned fish', expDate: new Date('2020, 09, 18') },
{ description: 'angelina loaf bread', expDate: new Date('2022, 09, 14') },
{ description: 'lucky me noodles', expDate: new Date('2022, 09, 13') }
]

const shelf3 = [{ description: 'canned fish', expDate: new Date('2020, 09, 18') },
{ description: 'angelina loaf bread', expDate: new Date('2001, 09, 14') },
{ description: 'lucky me noodles', expDate: new Date('1970, 01, 01') }
]


//test
console.log(hasExpiredItem(shelf1));
printList(getExpiredItem(shelf1));

console.log(hasExpiredItem(shelf2));
printList(getExpiredItem(shelf2));

console.log(hasExpiredItem(shelf3));
printList(getExpiredItem(shelf3));


//test 
function printList(items) {
    const print = (item) => {
        console.log(`Item description: ${item.description}`)
        console.log(`Item expDate: ${item.expDate.toDateString()} \n`)
    }
    items.map(print);
}