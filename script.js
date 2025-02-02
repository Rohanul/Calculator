let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    // Prevent multiple consecutive operators
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
