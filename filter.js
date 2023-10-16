// FILTER METHOD

const numbers = [12, 54, 67, 867, 456, 20, 80, 200];

// filter takes also a callback function as an argument. This callback function also has the current value (like in forEach or map).
// RETURNS A NEW ARRAY

const evenNumbers = numbers.filter((currentNumber) => {
    // the new array will contain only the elements that match this condition after the return
    return currentNumber % 2 === 0
})

const evenAndMoreThanOneHundred = numbers.filter((currentNumber) => {
    const isEven = currentNumber % 2 === 0;
    const isMoreThanHundred = currentNumber > 100

    return isEven && isMoreThanHundred
})


console.log(evenAndMoreThanOneHundred);