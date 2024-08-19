document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('sparkleContainer');

    let colors = ["#F5E822", "#FB3EB2", "#BF31B9", "#93F82D", "#FF9900", "#C3FE19"];

    container.addEventListener('mousemove', (e) => {
        let x = e.clientX - container.getBoundingClientRect().left;
        let y = e.clientY - container.getBoundingClientRect().top;

        let color = colors[Math.floor(Math.random() * colors.length)];
        let size = Math.random() * 6 + 4;

        let particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "10000";
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.display = "flex";
        particle.style.alignItems = "center";
        particle.style.justifyContent = "center";
        particle.style.transition = "all 1s linear"; // Adjust duration here
        particle.style.opacity = 1;

        let verticalBar = document.createElement("div");
        verticalBar.style.position = "absolute";
        verticalBar.style.width = "2px";
        verticalBar.style.height = size + "px";
        verticalBar.style.backgroundColor = color;

        let horizontalBar = document.createElement("div");
        horizontalBar.style.position = "absolute";
        horizontalBar.style.width = size + "px";
        horizontalBar.style.height = "2px";
        horizontalBar.style.backgroundColor = color;

        particle.appendChild(verticalBar);
        particle.appendChild(horizontalBar);

        container.appendChild(particle);

        setTimeout(() => {
            particle.style.opacity = 0;
            particle.style.transform = `translateY(${size * 2}px)`; // Adjust falling distance here
        }, 0);
        }, 0);

        setTimeout(() => {
            container.removeChild(particle);
        }, 5000); // Adjust duration here to match transition duration
    });

    //To adjust the falling distance of the particles, change the value in translateY(${size * 2}px).
    //To adjust how long the particles take to fall and fade away, modify both the transition duration (1s) 
    //and the timeout duration (1000 milliseconds). These values should match for a smooth effect.

