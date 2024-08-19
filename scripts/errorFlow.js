const errorContainer = document.getElementById('error-container');
const startErrorsButton = document.getElementById('start-errors');

const errors = [
    "Error 1: The system cannot find the file specified.",
    "Error 2: Access is denied.",
    "Error 3: The parameter is incorrect.",
    "Error 4: Not enough memory resources are available to complete this operation.",
    "Error 5: The data area passed to a system call is too small.",
    "Error 6: The network path was not found.",
    "Error 7: The disk is full.",
    "Error 8: The system cannot move the file to a different disk drive.",
    "Error 9: The directory is not empty.",
    "Error 10: The file name is too long.",
    "Error 11: The directory name is invalid.",
    "Error 12: The process cannot access the file because it is being used by another process.",
    "Error 13: The media is write-protected.",
    "Error 14: The system cannot find the path specified.",
    "Error 15: The system cannot open the file.",
    "Error 16: The device is not ready.",
    "Error 17: The system cannot read from the specified device.",
    "Error 18: The system cannot write to the specified device.",
    "Error 19: The system cannot find the drive specified.",
    "Error 20: The drive is not ready for use.",
    "Error 21: The drive cannot find the sector requested.",
    "Error 22: The device does not recognize the command.",
    "Error 23: Data error (cyclic redundancy check).",
    "Error 24: The program issued a command but the command length is incorrect.",
    "Error 25: The media is not formatted.",
    "Error 26: The media is not recognized.",
    "Error 27: The drive cannot be formatted.",
    "Error 28: The drive cannot be partitioned.",
    "Error 29: The drive cannot be initialized.",
    "Error 30: The drive cannot be locked.",
    "Error 31: The drive cannot be unlocked.",
    "Error 32: The device does not exist.",
    "Error 33: The device driver is not installed.",
    "Error 34: The drive does not support this function.",
    "Error 35: The drive is already in use.",
    "Error 36: The drive is not compatible."
];

function showError() {
    // Clear any existing error message
    errorContainer.innerHTML = '';

    // Create a new error message
    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';

    const errorText = document.createElement('p');
    const randomIndex = Math.floor(Math.random() * errors.length);
    errorText.textContent = errors[randomIndex];

    errorMessage.appendChild(errorText);
    errorContainer.appendChild(errorMessage);

    // Display the error message
    errorMessage.style.display = 'flex';

    // Hide the error message after some time
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

startErrorsButton.addEventListener('click', () => {
    // Start showing errors at random intervals between 2 to 5 seconds
    setInterval(() => {
        showError();
    }, Math.floor(Math.random() * 3000) + 2000); // Random interval between 2000ms (2s) and 5000ms (5s)
});
