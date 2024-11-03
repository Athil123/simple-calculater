const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value); 
    } catch (error) {
        console.error("Math Error:", error);
        display.value = "Math Error";
    }
}

function clearscreen() {
    display.value = "";
}


const container = document.querySelector('.falling-symbols-container');
const symbols = ['+', '-', '×', '÷', '=','√','∫', 'π', 'Σ', '∞', '∑'];

// Function to create a symbol element
function createFallingSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Random horizontal position
    symbol.style.left = Math.random() * 100 + 'vw';
    // Random animation duration and delay for variety in falling speeds
    symbol.style.animationDuration = 3 + Math.random() * 5 + 's'; // Between 3s and 8s
    symbol.style.animationDelay = Math.random() * 5 + 's'; // Random start delay

    container.appendChild(symbol);

    // Remove symbol after the animation ends to avoid memory overflow
    symbol.addEventListener('animationend', () => {
        symbol.remove();
    });
}

// Generate symbols at regular intervals
setInterval(createFallingSymbol, 300); // Adds a new symbol every 300 ms
