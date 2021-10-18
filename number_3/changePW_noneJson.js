const randomLetter = (randomNumber) => {
    const CHAR_LETTER_MIN = 97;
    const ALPHABET_RANGE = 26;
    const randomCharCode = Math.trunc(randomNumber * ALPHABET_RANGE) + CHAR_LETTER_MIN;
    return String.fromCharCode(randomCharCode);
}

const randomPunctutation = (randomNumber) => {
    const punctutations = ['.', '!', '?'];
    return punctutations[Math.trunc(randomNumber * 3)];
};

const randomNumber = (randomNumber) => Math.trunc(randomNumber * 10);

const randomizeItems = (charList, randomizerList) => {
    const [numHead, ...numTail] = randomizerList;
    if (numHead === undefined) {
        return [...charList];
    }
    const index = Math.trunc(numHead * charList.length);
    const copy = [...charList];
    copy.splice(index, 1);
    return [charList[index], ...randomizeItems(copy, numTail)];
}


const generatePassword = (radomizer11) => {
    const lettersNumbers = radomizer11.slice(0, 9);
    const numberNumbers = radomizer11.slice(8, 10);
    const randomLetters = lettersNumbers.map(randomLetter);
    const randomNumbers = numberNumbers.map(randomDigit);
    const randomSymbol = randomPunctutation(radomizer11[10]);
    return randomLetters.join('') + randomNumbers.join('') + randomSymbol;
}

const changePassword = (account, newPassword) => {
    const copy = { ...account };
    copy.password = newPassword;
    return copy;
}


const findIdChangePassword = (studentID, studentList, newPassword) => {
    const isMatch = student => student.id === studentID;
    const match = (student) => isMatch(student) ? changePassword(student, newPassword) : student;
    return studentList.map(match);
}





// test ==>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const listOfStudents = [
    {
        email: 'juan.delacruz20@cpu.edu.ph',
        password: 'n2uhnrk8!db',
        firstName: 'Juan',
        lastName: 'Dela cruz',
        id: 20047798,
        course: 'BSSE',
        year: 2
    },
    {
        email: 'pedro.luna19@cpu.edu.ph',
        password: 'b27vkvbl?vg',
        firstName: 'Pedro',
        lastName: 'Luna',
        id: 19039796,
        course: 'BSSS',
        year: 3
    },
    {
        email: 'luffy.monkey21@cpu.edu.ph',
        password: '5ef5avu.ctq',
        firstName: 'Luffy',
        lastName: 'Monkey',
        id: 21152364,
        course: 'BSIT',
        year: 1
    },
    {
        email: 'ace.protgas20@cpu.edu.ph',
        password: 'c9hii1quw.k',
        firstName: 'Ace',
        lastName: 'Protgas',
        id: 20058843,
        course: 'BSSS',
        year: 2
    }
];

const randomizer = [
    0.5052335125957668,
    0.7949734733227085,
    0.46682253355550984,
    0.8427297378651921,
    0.18709153675063983,
    0.10940824651749015,
    0.8186024289623424,
    0.8296097637738227,
    0.7549752912758458,
    0.46122042984235523,
    0.8006839136019155
];

// console.log('change password:', changePassword(listOfStudents[1], 'hagado'))
console.log('original:', listOfStudents);
console.log('change password by random Student 1: ', findIdChangePassword(20047798, listOfStudents, generatePassword(randomizer)));
console.log('change password define password Student 1:', findIdChangePassword(20047798, listOfStudents, 'HAGADOOo-THISisMyPassword2021'));
// console.log(findIdChangePassword(21152364, listOfStudents, randomizer))
// console.log('original:', listOfStudents)


