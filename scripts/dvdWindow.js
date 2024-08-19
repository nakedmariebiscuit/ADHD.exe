const logo = document.getElementById('logo');
const container = document.getElementById('dvdContainer');
const guestbookButton = document.querySelector('.menu-container .menu-item:nth-child(4) .page-button'); // Corrected selector
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Array of colors for the logo
const speed = 5; // Speed of the animation

let x = Math.random() * (container.clientWidth - logo.clientWidth);
let y = Math.random() * (container.clientHeight - logo.clientHeight);
let dx = speed * (Math.random() > 0.5 ? 1 : -1);
let dy = speed * (Math.random() > 0.5 ? 1 : -1);
let currentColorIndex = 0;

function update() {
    x += dx;
    y += dy;

    // Bounce off the left or right edges
    if (x <= 0 || x + logo.clientWidth >= container.clientWidth) {
        dx *= -1;
        changeColor();
    }

    // Bounce off the top or bottom edges
    if (y <= 0 || y + logo.clientHeight >= container.clientHeight) {
        dy *= -1;
        changeColor();
    }

    // Ensure the logo stays within the container bounds
    x = Math.max(0, Math.min(x, container.clientWidth - logo.clientWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - logo.clientHeight));

    logo.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(update);
}

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    logo.style.color = colors[currentColorIndex];
}

guestbookButton.addEventListener('click', () => {
    container.style.display = 'block'; // Show the dvd-container
    update(); // Start the animation
});
