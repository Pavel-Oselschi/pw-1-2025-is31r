// Task 1 
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const counterInput = document.getElementById('counter');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counterInput.value, 10);
    if (currentValue > 0) {
        counterInput.value = currentValue - 1;
    }
    updateButtons();
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counterInput.value, 10);
    if (currentValue < 9) {
        counterInput.value = currentValue + 1;
    }
    updateButtons();
});

function updateButtons() {
    decreaseBtn.disabled = parseInt(counterInput.value, 10) === 0;
    increaseBtn.disabled = parseInt(counterInput.value, 10) === 9;
}

// Task 2
const chessboard = document.getElementById('chessboard');

for (let row = 0; row < 8; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 8; col++) {
        const td = document.createElement('td');
        if ((row + col) % 2 === 0) {
            td.style.backgroundColor = 'white';
        } else {
            td.style.backgroundColor = 'black';
        }
        tr.appendChild(td);
    }
    chessboard.appendChild(tr);
}

// Task 3 
const timerDiv = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const targetDate = new Date('February 1, 2025 00:00:00');
    const diff = targetDate - now;

    if (diff <= 0) {
        timerDiv.textContent = 'Time\'s up!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerDiv.textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();