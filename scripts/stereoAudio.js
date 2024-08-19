const audioContainer = document.querySelector('.audio-container');
const audioElement = document.getElementById('hover-audio');
const context = new (window.AudioContext || window.webkitAudioContext)();
const source = context.createMediaElementSource(audioElement);
const panner = context.createStereoPanner();
const gainNode = context.createGain();

// Connect the audio nodes
source.connect(panner).connect(gainNode).connect(context.destination);

// Adjust volume (0.5 is 50% volume, adjust as needed)
gainNode.gain.value = 0.5;

audioContainer.addEventListener('mouseenter', () => {
    audioElement.play();
});

audioContainer.addEventListener('mouseleave', () => {
    audioElement.pause();
});

audioContainer.addEventListener('mousemove', (e) => {
    const rect = audioContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Calculate panning value and clamp it to the range [-1, 1]
    let panValue = (x / width) * 2 - 1;
    panValue = Math.max(-1, Math.min(1, panValue));
    panner.pan.value = panValue;
});
