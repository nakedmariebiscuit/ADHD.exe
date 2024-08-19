document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const modal = document.getElementById("retryModal");
    const btn = document.getElementById("retryBtn");
    const span = document.getElementsByClassName("close")[0];

    let interval;

    const startProgress = () => {
        progressContainer.style.display = 'block';
        let progress = 0;
        progressBar.value = progress;
        interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
                progressContainer.style.display = 'none';
                modal.style.display = "flex";  // Show modal once progress is 100%
            } else {
                progress += 1;
                progressBar.value = progress;
            }
        }, 20); // Adjust the speed of progress here (in milliseconds)
    };

    btn.onclick = function() {
        startProgress();
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});