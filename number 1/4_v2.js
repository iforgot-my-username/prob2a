const getStudentsInYear = (year, studentList) => {
    const getYearLevel = student => student.year === year;
    return studentList.filter(getYearLevel);
}


const removeSpaces = (str) => {
    return str.trim().split(' ').join('');
}


const generateEmail = (student) => {
    const firstName = removeSpaces(student.firstName);
    const lastName = removeSpaces(student.lastName);
    const idNum = student.idNum.toString().slice(0, 2);
    return firstName.toLowerCase() + '.' + lastName.toLowerCase() + idNum + '@cpu.edu.ph';
}

const randomLetter = (randomNumber) => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters[Math.trunc(randomNumber * letters.length)];
}

const randomPunctutation = (randomNumber) => {
    const punctutations = ['.', '!', '?'];
    return punctutations[Math.trunc(randomNumber * 3)];
};

const randomNumber = (randomNumber) => Math.trunc(randomNumber * 10);

const randomize = (charList, randomizerList) => {
    const [numHead, ...numTail] = randomizerList;
    if (numHead === undefined) {
        return [...charList];
    }
    const index = Math.trunc(numHead * charList.length);
    const copy = [...charList];
    copy.splice(index, 1);
    return [charList[index], ...randomize(copy, numTail)];
}


const generatePassword = (random11Numbers) => {
    if (random11Numbers.length >= 11) {
        const lettersNumbers = random11Numbers.slice(0, 8);
        const numNumbers = random11Numbers.slice(8, 10);
        const randomLetters = lettersNumbers.map(randomLetter);
        const randomNumbers = numNumbers.map(randomNumber);
        const randomSymbol = randomPunctutation(random11Numbers[10]);
        return randomize(randomLetters.concat(randomNumbers).concat(randomSymbol), random11Numbers).join('');
    }
}

const indexOf = (student) => studentList.indexOf(student)

const generateAccounts = (studentList, randomNumberList) => {
    const generateAccount = (student) => {
        return { email: generateEmail(student), password: generatePassword(randomNumberList[indexOf(student)]) };

    }
    return studentList.map(generateAccount);
}


//text codes

const studentList = [
    { firstName: 'Juan', lastName: 'Dela cruz', idNum: 20047798, course: 'BSSE', year: 2 },
    { firstName: 'Pedro', lastName: 'Luna', idNum: 19039796, course: 'BSSS', year: 3 },
    { firstName: 'Luffy', lastName: 'Monkey', idNum: 21152364, course: 'BSIT', year: 1 },
    { firstName: 'Ace', lastName: 'Protgas', idNum: 20058843, course: 'BSSS', year: 2 },
    { firstName: 'Juan Pedro', lastName: 'Luna', idNum: 20036723, course: 'BSN', year: 2 },
    { firstName: 'John', lastName: 'Snow', idNum: 21095467, course: 'BSA', year: 1 }
]

const randomNumberList = [
    [
        0.5158915602392262,
        0.8071955989616599,
        0.11874190942192109,
        0.28117735275524347,
        0.06116048536018992,
        0.5209073783062208,
        0.4026296054378782,
        0.6822096467616339,
        0.8673377147612029,
        0.29549446470841634,
        0.57626164246533
    ],
    [
        0.07599625519007591,
        0.8405138663260152,
        0.820667277222505,
        0.05846083713528727,
        0.8128933966976057,
        0.4257551068742782,
        0.23538750440187117,
        0.4096200728688917,
        0.7069796176550716,
        0.20055829708853645,
        0.99977855602440906
    ],
    [
        0.839750607062079,
        0.22244151062850337,
        0.15644189995677893,
        0.8059604012780497,
        0.6386468732413819,
        0.10478037223199532,
        0.00834128053661054,
        0.766258461797025,
        0.5529712790244148,
        0.5504291976372735,
        0.12723304422470805
    ],
    [
        0.6223969697885792,
        0.8513795613315349,
        0.2966935696701243,
        0.3087290362610309,
        0.3085434781395928,
        0.7957527387226997,
        0.09334964430177228,
        0.41316398493429984,
        0.15131513430327415,
        0.9981509079216055,
        0.30303425558949715
    ],
    [
        0.9102019495764031,
        0.8128883189210185,
        0.7937307293368505,
        0.7951622980896291,
        0.09031976369644212,
        0.91213264552263,
        0.8582372838495436,
        0.26903742128943886,
        0.01121325683972585,
        0.9019851241776107,
        0.9016709341180611
    ],
    [
        0.8462196518755072,
        0.4525021047422242,
        0.9186015428856058,
        0.012159658543143825,
        0.3713109154411054,
        0.4611897664189546,
        0.017600438382614936,
        0.605481256529107,
        0.764502449062141,
        0.061242024929226035,
        0.596308390020885
    ]
]

console.log("year 2 students", getStudentsInYear(2, studentList));
console.log("year 1 students", getStudentsInYear(1, studentList));
console.log("accounts", generateAccounts(studentList, randomNumberList));

