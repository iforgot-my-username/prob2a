const initials = (person, withDot) => {
    const firstName = person.firstName.split(" ");
    const middleName = person.middleName.split(" ");
    const lastName = person.lastName.split(" ");
    const personName = firstName.concat(middleName).concat(lastName);
    const firstLetter = (item) => item[0];
    const result = personName.map(firstLetter);
    return withDot ? result.join(".") : result.join("");
}

//test =>>>>>
const personsList = [
    { firstName: 'Juan', middleName: 'Reyes', lastName: 'Cruz' },
    { firstName: 'Pedro', middleName: 'Braza', lastName: 'Luna' },
    { firstName: 'Luffy', middleName: 'Dee', lastName: 'Monkey' },
    { firstName: 'Ace', middleName: 'Dee', lastName: 'Protgas' },
    { firstName: 'Juan Pedro', middleName: 'Aranda', lastName: 'Luna' },
    { firstName: 'John', middleName: 'Walker', lastName: 'Snow', }
];


console.log("No dots:", personsList.map((person) => initials(person, false)));
console.log("With dots:", personsList.map((person) => initials(person, true)));