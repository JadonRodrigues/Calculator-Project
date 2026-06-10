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