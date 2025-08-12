let display = document.getElementById('display');
let themeBtn = document.querySelector('.theme-toggle');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function factorial() {
    let n = parseInt(display.value);
    if (n < 0) {
        display.value = "Error";
        return;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    display.value = result;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener('keydown', function(e) {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        display.value += e.key;
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    }
});

function toggleTheme() {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? "Dark Mode" : "Light Mode";
}
