document.addEventListener("DOMContentLoaded", () => {
  const cursorContainer = document.getElementById('cursorContainer');

  let particleIndex = 0; // To keep track of the particle delay

  cursorContainer.addEventListener('mousemove', (e) => {
      let x = e.clientX - cursorContainer.getBoundingClientRect().left;
      let y = e.clientY - cursorContainer.getBoundingClientRect().top;

      let cursorParticle = document.createElement("div");
      cursorParticle.className = "cursor-particle";
      cursorParticle.style.left = x + "px";
      cursorParticle.style.top = y + "px";

      // Increase the delay for each new particle
      cursorParticle.style.transitionDelay = `${particleIndex * 100}ms`;
      
      cursorContainer.appendChild(cursorParticle);

      // Increment the index for the next particle
      particleIndex++;

      setTimeout(() => {
          cursorParticle.style.opacity = 0;
          cursorParticle.style.transform = `translateY(${20}px)`; // Adjust falling distance if needed
      }, 0);

      setTimeout(() => {
          cursorContainer.removeChild(cursorParticle);
      }, 1500); // Adjust duration to match transition duration
  });
});
