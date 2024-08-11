let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number.toString();
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op !== '-') return;
    if (operator !== null) {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = null;
    previousInput = '';
    display.innerText = result;
}
