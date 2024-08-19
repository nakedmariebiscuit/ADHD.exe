document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container');
  const ghostImage = document.getElementById('ghost-image');
  const pageButton = document.querySelector('.page-button'); // Target the <p> element
  let offsetX, offsetY;
  let ghostTrail = [];

  // Show the container when the <p> element is clicked
  pageButton.addEventListener('click', () => {
    container.style.display = 'block';
  });

  // Hide the container when clicking outside of it (not when clicking inside the container)
  document.addEventListener('click', (event) => {
    if (!container.contains(event.target) && event.target !== pageButton) {
      container.style.display = 'none';
    }
  });

  // Ensure that clicks inside the container do not close it
  container.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent clicks inside the container from triggering the document click event
  });

  ghostImage.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - ghostImage.offsetLeft;
    offsetY = e.clientY - ghostImage.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    ghostImage.style.left = `${x}px`;
    ghostImage.style.top = `${y}px`;

    createGhost(x, y);
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  function createGhost(x, y) {
    const ghost = ghostImage.cloneNode(true);
    ghost.classList.add('ghost');
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;
    container.appendChild(ghost);
    ghostTrail.push(ghost);

    if (ghostTrail.length > 100) { // Limit number of ghost images
      const oldGhost = ghostTrail.shift();
      container.removeChild(oldGhost);
    }
  }
});
