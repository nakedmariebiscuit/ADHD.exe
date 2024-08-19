// Array of different alert messages
const alerts = [
    "When last did you eat??",
    "Bathroom Break!",
    "Please drink some water.",
    "No seriously, you need to pee",
    "Did you know that your brain is constantly eating itself?"
];

// Array of OK button texts corresponding to each alert
const okButtonTexts = [
    "No time, in the zone",
    "In a minute",
    "Motivation is the only hydration I need",
    "I'll pee when I'm done",
    "I'll Google it later..."
];

// Function to show the modal with a random alert message
function showModal() {
    let modal = document.getElementById('alertModal');
    let alertMessage = document.getElementById('alertMessage');
    let okButton = document.getElementById('okButton');

    // Generate a random index
    let randomIndex = Math.floor(Math.random() * alerts.length);
    
    // Update the alert message and OK button text
    alertMessage.textContent = alerts[randomIndex];
    okButton.textContent = okButtonTexts[randomIndex]; // Set OK button text

    // Display the modal
    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById('alertModal');
    modal.style.display = 'none';
}

// Delay before starting the alerts (in milliseconds)
let initialDelay = 3000; // Change this value to set the initial delay (3000ms = 3 seconds)
let interval = 7000; // Change this value to set the interval in milliseconds (5000ms = 5 seconds)

// Start showing the alerts after the initial delay
setTimeout(function() {
    setInterval(showModal, interval);
}, initialDelay);