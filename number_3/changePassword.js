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


const generatePassword = (randomizers) => {
    if (randomizers.length >= 11) {
        const process = (randomizer, index) => {
            if (index < 8) {
                return randomLetter(randomizer);
            }
            return index < 10 ? randomNumber(randomizer) : randomPunctutation(randomizer);
        }
        return randomize(randomizers.map(process), randomizers).join('');
    }
}

const changePassword = (account, random11Numbers) => {
    const clone = { ...account };
    clone.password = generatePassword(random11Numbers);
    return clone;

}


const findIdChangePassword = (studentID, studentList, random11Numbers) => {
    const isMatch = student => student.id === studentID;
    const match = (student) => isMatch(student) ? changePassword(student, random11Numbers) : student;
    return studentList.map(match);
}


// test ==>>>
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

// console.log('change password:', changePassword(listOfStudents[1], randomizer))
// console.log('original:', listOfStudents[1])
console.log('change password:', findIdChangePassword(21152364, listOfStudents, randomizer));
console.log('original:', listOfStudents);

