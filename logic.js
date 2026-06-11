function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
let numS;
let operator;
let numE;
const display = document.querySelector(".display");
const keys = document.querySelectorAll(".nos");
const clear = document.querySelector(".AC");
const plusbutton = document.querySelector(".addition")
const equalsbutton = document.querySelector(".equal");
const multibutton = document.querySelector(".multiplication");
const divbutton = document.querySelector(".dividing");
const substbutton = document.querySelector(".minus")
keys.forEach((key) => {
    key.addEventListener("click", () =>{
        display.textContent += key.textContent;
    });
});
clear.addEventListener("click", () => {
    display.textContent = "";
    numS = undefined;
    numE = undefined;
    operator = undefined;
});
plusbutton.addEventListener("click", () => {
    handleOperator("+");
});

substbutton.addEventListener("click", () => {
    handleOperator("-");
});

multibutton.addEventListener("click", () => {
    handleOperator("*");
});

divbutton.addEventListener("click", () => {
    handleOperator("/");
});
equalsbutton.addEventListener("click", () => {
    numE = Number(display.textContent);
    const result = operate(numS,operator,numE);
    display.textContent = result;
});
function handleOperator(op) {

    if (display.textContent === "") return;

    // First operator press
    if (numS === undefined) {
        numS = Number(display.textContent);
    }

    // Chaining case: 5 + 3 *
    else {
        numE = Number(display.textContent);
        numS = operate(numS, operator, numE);
    }

    operator = op;
    display.textContent = "";
}
function operate(numS,operator,numE){
    if (operator == "+"){
        return add(numS,numE);
    }
    else if(operator == "-"){
        return subtract(numS, numE);
    }
    else if(operator == "*"){
        return multiply(numS, numE);
    }
    else if(operator == "/"){
        return divide(numS, numE);
    }
}