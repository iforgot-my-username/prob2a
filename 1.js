
const countries = [{ name: 'Philiippines', population: 200 }, { name: 'Japan', population: 30000 }, { name: 'china', population: 50000 }, { name: 'india', population: 3500 }];


function getLowestPop(countries) {
    let Lowest;

    function hasLowPop(parameterCountry) {
        Lowest = Lowest ?? parameterCountry;
        return Lowest.population > parameterCountry.population;
    }

    function compare(parameterCountry) {
        if (hasLowPop(parameterCountry)) {
            Lowest = parameterCountry;
        }
    }
    countries.map(bit => compare(bit));
    return Lowest
}


function getTotalPop(countries) {
    const getSum = (previous, current) => previous + current.population
    return countries.reduce(getSum, 0);
}

console.log(getLowestPop(countries))
console.log(getTotalPop(countries));