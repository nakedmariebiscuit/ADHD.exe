const wheel = document.querySelector('.wheel-inner');
const spinButton = document.querySelector('.spin-button');
const confettiContainer = document.querySelector('.confetti-container');

const prizes = [
    { text: 'Random Hyperfixation', color: '#ff9999' },
    { text: 'Task Paralysis', color: '#ffcc99' },
    { text: 'Infinite Tab Hoarding', color: '#ffff99' },
    { text: 'Impulse Shopping Spree', color: '#ccff99' },
    { text: 'Overthinking Loop', color: '#99ff99' },
    { text: 'Sudden Cleaning Urge', color: '#99ffcc' },
    { text: 'Instant Boredom', color: '#99ffff' },
    { text: 'Sleep Deprivation', color: '#99ccff' },
    { text: 'Creative Explosion', color: '#cc99ff' },
    { text: 'Snack Attack', color: '#ff99ff' }
];

let isSpinning = false;

function createWheelSections() {
    const numPrizes = prizes.length;
    const angle = 360 / numPrizes;
    
    prizes.forEach((prize, index) => {
        const prizeElem = document.createElement('div');
        prizeElem.className = 'prize';
        prizeElem.style.backgroundColor = prize.color;
        prizeElem.style.transform = `rotate(${index * angle}deg)`;
        prizeElem.innerHTML = `<span>${prize.text}</span>`; // Add text to each section
        wheel.appendChild(prizeElem);
    });
}

function spinWheel() {
    if (isSpinning) return; // Prevent spinning while already spinning
    isSpinning = true;

    const numPrizes = prizes.length;
    const spinAngle = Math.floor(Math.random() * 360) + 360 * 3; // Random spin angle + additional spins
    wheel.style.transform = `rotate(${spinAngle}deg)`;

    setTimeout(() => {
        showConfetti();
        isSpinning = false;
    }, 4000); // Confetti appears after the spin
}

function showConfetti() {
    confettiContainer.innerHTML = ''; // Clear existing confetti
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.left = `${Math.random() * 100}%`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = ''; // Remove confetti after animation
    }, 3000); // Confetti disappears after 3 seconds
}

spinButton.addEventListener('click', spinWheel);

createWheelSections();
