// Create a function using a function expression (store it in a variable) and use the arrow. =>

// This function is going to print "Counter of seconds {numberOfseconds}"

// This function needs to run every 1 second and it has to display this:

// Counter of seconds 0
// Counter of seconds 1
// Counter of seconds 2
// Counter of seconds 3
// Counter of seconds 4
// Counter of seconds 5

// and stop
let seconds = 0;
const counterFunction = setInterval(() => {
    console.log("Counter of seconds ", seconds);
    seconds++
    if(seconds > 5){
        clearInterval(counterFunction)
    }
}, 1000);

/* setTimeout(()=>{
    clearInterval(counterFunction)
}, 6000); */

