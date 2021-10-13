const curseWords = ['crap', 'bitch', 'fuck', 'noob', 'shit', 'suck'];

function cleanUp(str) {
    const censor = (match) => {
        const bits = match.split('');
        const [head, ...tail] = bits;
        return head + [...tail].map(() => '*').join('')
    }


    return str.replace(new RegExp(curseWords.join('|'), 'gi'), censor)
}


const filtyStatement = 'you suck noob shit go home';
console.log(cleanUp(filtyStatement));
console.log(filtyStatement)
const filtyStatement2 = 'You SUCK NOOB xxSHITzz go home';
console.log(cleanUp(filtyStatement2));