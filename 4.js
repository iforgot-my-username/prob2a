const studentList = [
    { firstName: 'Juan', lastName: 'Dela cruz', idNum: 20047798, course: 'BSSE', year: 2 },
    { firstName: 'Pedro', lastName: 'Luna', idNum: 19039796, course: 'BSSS', year: 3 },
    { firstName: 'Luffy', lastName: 'Monkey', idNum: 21152364, course: 'BSIT', year: 1 },
    { firstName: 'Ace', lastName: 'Protgas', idNum: 20058843, course: 'BSSS', year: 2 },
    { firstName: 'Juan Pedro', lastName: 'Luna', idNum: 20036723, course: 'BSN', year: 2 },
    { firstName: 'John', lastName: 'Snow', idNum: 21095467, course: 'BSA', year: 1 }
]

//A student has  ID #, name, course, and year


function getStudentsInYear(year, studentList) {
    const getYearLevel = student => student.year === year;
    return studentList.filter(getYearLevel);
}


String.prototype.removeSpaces = function removeSpaces() {
    return this.trim().split(' ').join('');
}

function generateAccounts(studentList) {
    function generateEmail(student) {
        const firstName = student.firstName.removeSpaces();
        const lastName = student.lastName.removeSpaces();
        const idNum = student.idNum.toString().slice(0, 2)
        return firstName.toLowerCase() + '.' + lastName.toLowerCase() + idNum + '@cpu.edu.ph'
        //students first name, a dot, his last name, and the first two digits of his/her ID number, @cpu.edu.ph
    }

    function generatePassword() {
        const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const punctutations = ['.', '!', '?'];

        let randomLetters = new Array(8).fill('').map(() => letters[Math.trunc(Math.random() * letters.length)]);

        let randomNumber = new Array(2).fill('').map(() => Math.trunc(Math.random() * 10));

        let randomPunctutation = punctutations[Math.trunc(Math.random() * 3)];

        return randomLetters.join('') + randomNumber.join('') + randomPunctutation;
        //8 random letters, 2 random numbers, and one of the sentence-ending punctuations (period, exclamation, question mark).


        // randomLetter = "a".charCodeAt(0) //=>97
    }

    const generateAccount = function generate(student) {
        return { email: generateEmail(student), password: generatePassword() };
    }


    return studentList.map(generateAccount);

}





printStundents(getStudentsInYear(1, studentList));
printStundents(getStudentsInYear(2, studentList));

printStundentsAccounts(generateAccounts(studentList));


function printStundents(studentList) {
    const print = (student) => {
        console.log(`Student Name:     ${student.firstName} ${student.lastName}`)
        console.log(`Student ID Num:   ${student.idNum}`);
        console.log(`Course and Year:  ${student.course}-${student.year}\n`);
    }
    studentList.map(print);
    console.log('\n \n \n');
}

function printStundentsAccounts(studentList) {
    const print = (student) => {
        console.log(`Student Email:     ${student.email}`)
        console.log(`Student Password:  ${student.password} \n`);
    }
    studentList.map(print);
    console.log('\n\n');
}
