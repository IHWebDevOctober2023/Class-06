// REDUCE

// Takes two arguments, the first one is the accumulator
// The second one is the currentValue

const numbers = [1, 18, 2, 3]

/* const resultOfSum = numbers.reduce((accumulator, currentValue)=>{
    console.log(`Now the accumulator is: ${accumulator}`);
    console.log(`And the currentValue is: ${currentValue}`);
    return accumulator + currentValue
}, 10) */

/* console.log(resultOfSum); */

const max = numbers.reduce((acc, current) => {
    console.log(`Now the accumulator is: ${acc}`);
    console.log(`And the currentValue is: ${current}`);
    if (current > acc) {
        return current
    } else {
        return acc
    }
})

// console.log(`The MAX NUMBER IS: ${max}`);


const words = ["I", "LOVE", "JavaScript"]

const sentence = words.reduce((acc, current)=>{
    console.log(`Now the accumulator is: ${acc}`);
    console.log(`And the currentValue is: ${current}`);
    return acc + " " + current
})

console.log(sentence);

// remember we can use JOIN method to do this. This was just an example. 