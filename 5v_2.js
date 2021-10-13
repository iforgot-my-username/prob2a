const curseWordList = ['crap', 'bitch', 'fuck', 'noob', 'shit', 'suck'];

const cleanUp = (str) => {
    const censor = (match) => match[0] + '*'.repeat(match.length - 1);
    const addPlusSymbol = (bit) => bit.split('').join('+')
    const curseWordsStr = curseWordList.map(addPlusSymbol).join('|')
    const regExpBits = new RegExp(`(${curseWordsStr})|(.)`, 'gi');

    const bits = str.match(regExpBits);

    const process = (bit) => {
        const regExp = new RegExp(curseWordsStr, 'gi')
        if (regExp.test(bit)) {
            return censor(bit);
        }
        return bit;
    }

    return bits.map(process).join('');
}



const filtyStatement = 'you Sucker. noob shit go home';
console.log(cleanUp(filtyStatement));
const filtyStatement2 = 'You SssssUCK NOOOOOOB xxSHITzz go home';
console.log(cleanUp(filtyStatement2));