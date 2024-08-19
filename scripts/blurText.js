window.addEventListener('scroll', () => {
    const blurText = document.querySelector('.blur-text');
    const scrollY = window.scrollY;
    const blurValue = Math.min(scrollY / 10, 20); // Max blur value set to 20px

    blurText.style.filter = `blur(${blurValue}px)`;
});