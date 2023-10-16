// MAP METHOD FOR ARRAYS

// it takes a callback as argument
// it returns a NEW ARRAY with the same length as the original one


const numbers = [1, 2, 3]

const doubled = numbers.map((ditto) => {
    return ditto * 2
})

// We can create a copy of the array like this
const numbersCopy = numbers.map((number) => number)

// doubled = [2,4,6]

// console.log(numbersCopy);