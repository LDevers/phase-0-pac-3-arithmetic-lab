function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function increment(a) {
    return (a += 1);
}

increment(12);

function decrement(a) {
    return (a -= 1);
}

decrement(13);

function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(number) {
    return parseFloat(number)
}
