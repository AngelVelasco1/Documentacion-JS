const operation = (num1, num2, operation) => {
    let result = operation(num1, num2);
    (operation(add)) ? console.log(`The sum is ${result}`) : console.log(`The sustract is ${result}`)
    
};

let add = (a, b) => {
    return a + b;
}

let sustract = (a, b) => {
    return a - b;
}

operation(5, 10, add);
operation(1, 2, sustract);