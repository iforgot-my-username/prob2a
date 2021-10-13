// Inpure function for number 4 to generate randomizers in a list

const randomizer11 = (count) => {
    if (count > 0) {
        let result = new Array(11).fill('').map(() => Math.random());
        return [result, ...randomizer11(count - 1)]
    }
    return []
}

console.log(randomizer11(1))