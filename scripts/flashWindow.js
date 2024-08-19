document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelectorAll('.page-button')[1]; // Selects the second .page-button element
    const container = document.getElementById('gameContainer');
    const flashImage = document.querySelector('.flash-image');

    let intervalId;

    // Function to move the image to a random position
    function moveImage() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const imgWidth = flashImage.offsetWidth;
        const imgHeight = flashImage.offsetHeight;

        // Calculate new position ensuring the image stays within viewport
        const randomX = Math.random() * (windowWidth - imgWidth);
        const randomY = Math.random() * (windowHeight - imgHeight);

        flashImage.style.left = `${randomX}px`;
        flashImage.style.top = `${randomY}px`;
    }

    playButton.addEventListener('click', () => {
        // Toggle container visibility
        if (container.style.display === 'block') {
            container.style.display = 'none';
            clearInterval(intervalId); // Stop the flashing effect
        } else {
            container.style.display = 'block';

            // Start the flashing effect
            intervalId = setInterval(() => {
                moveImage();
            }, 1000); // Adjust the interval as needed
        }
    });
});
