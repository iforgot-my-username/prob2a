// Pure Function just depends only on its declared input parameters that is why I just made 
// the DateNow as a parameter for hasEcpriredItems and getExprideItem

const hasExpiredItem = (items, DateNow) => {
    const isExpired = item => item.expDate < DateNow;
    return items.some(isExpired);
}

const getExpiredItem = (items, DateNow) => {
    const isExpired = item => item.expDate < DateNow;
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
console.log("Has Expired Item in : ", hasExpiredItem(shelf1, new Date("10-10-2021")));
console.log(getExpiredItem(shelf1, new Date("10-10-2021")), "\n");

console.log("Has Expired Item in shelf2: ", hasExpiredItem(shelf2, new Date("10-10-2021")));
console.log(getExpiredItem(shelf2, new Date("10-10-2021")), "\n");

console.log("Has Expired Item in shelf3: ", hasExpiredItem(shelf3, new Date("10-10-2021")));
console.log(getExpiredItem(shelf3, new Date("10-10-2021")));

