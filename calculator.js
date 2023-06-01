// I am a 2 variables calculator

// choose your numbers, in the order of the operation you want;
let number1 = 98925;
let number2 = 3;
// choose your operation: sum, subtract, multiply or divide;
let operation = "sum";

// from here on only code :)

console.log("Hello! I am a calculator.");

if (operation === "divide") {
    console.log("The result is ", number1+number2);
    
} else if (operation === "subtract") {
    console.log("The result is ", number1-number2); 
    
} else if (operation === "multiply") {
    console.log("The result is ", number1*number2);  

} else {
    console.log("The result is ", number1/number2)
}

// end
