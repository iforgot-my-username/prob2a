
const countries = [{ name: 'Philiippines', population: 200 }, { name: 'Japan', population: 30000 }, { name: 'china', population: 50000 }, { name: 'india', population: 3500 }];


const getLowestPop = (countries) => {
    const hasLowPop = (previous, current) => {
        return previous.population > current.population ? current : previous;
    }
    return countries.reduce(hasLowPop);
}


const getTotalPop = (countries) => {
    const getSum = (previous, current) => previous + current.population
    return countries.reduce(getSum, 0);
}

console.log(getLowestPop(countries))
console.log(getTotalPop(countries));