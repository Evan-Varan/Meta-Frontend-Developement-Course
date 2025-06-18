//Return example
var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount,rate){
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne,exchangeRate);
console.log(currencyTwo)


//Recursion Example
let counter = 3;
function example(){
    console.log(counter);
    counter--;
    if(counter === 0) return;
    example();
}
example();

//Fibonacci Example
function fib(n) {
    // Step 1: Define the base case(s) here.
    // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?
    
    // Step 2: Define the recursive case here.
    // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).

    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);


}
console.log(fib(5));
console.log(fib(10));


//Console Text Styling Lab
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background}`
    style += `font-size: ${fontSize};`
    console.log(message,style)
}

function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }
    else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle)
    }
    else {
        console.log(message, style);
    }
}

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
