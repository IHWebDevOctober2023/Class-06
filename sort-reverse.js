const array = [1.2, 2, 12, 3, 4, 0, 1, 20, 19]

// BE CAREFULL with the reverse method because it changes the original one
/* console.log("ARRAY REVERSED:", array.reverse())

console.log("ORIGINAL ARRAY: ",array); */

const reversedCopy = array.map((number) => number).reverse()

/* console.log(reversedCopy);
console.log(array); */

// SORT

// Sorts the elements of the array and returns the sorted array.

array.sort((a, b) => {
    console.log(`I'm comparing ${a} and ${b}`);
    if (a < b) {
        console.log(`${a} is smaller ${b}`);

        return -1
    }
    else if (a > b) {
        console.log(`${a} is bigger ${b}`);
        return 1
    }
    else {
        console.log(`${a} is ${b}`);
        return 0
    }
})

// console.log(array);

const wordsArray = ["JavaScript", "is", "AMAZING"]
/* 
wordsArray.sort((a, b) => {
    console.log(`I'm comparing ${a} and ${b}`);
    if (a.length < b.length) {
        console.log(`${a} is smaller ${b}`);

        return -1
    }
    else if (a.length > b.length) {
        console.log(`${a} is bigger ${b}`);
        return 1
    }
    else {
        console.log(`${a} is ${b}`);
        return 0
    }
})
 */
// QUick approach to sort numbers

array.sort((a, b) => a - b)
wordsArray.sort((a,b)=> a.length - b.length)

console.log(wordsArray);