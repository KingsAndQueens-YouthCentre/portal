// Subtle floating animation effect
const intro = document.querySelector('.intro-content');

let angle = 0;

function floatElement() {
  angle += 0.02;
  const y = Math.sin(angle) * 5;
  const x = Math.cos(angle) * 5;
  intro.style.transform = `translate(${x}px, ${y}px) rotateY(${Math.sin(angle) * 5}deg)`;
  requestAnimationFrame(floatElement);
}

document.addEventListener('DOMContentLoaded', () => {
  floatElement();

  // Random sparkles
  setInterval(() => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
  }, 600);
});

// Add sparkles with random size and glow
const style = document.createElement('style');
style.textContent = `
.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  opacity: 0.7;
  box-shadow: 0 0 10px white, 0 0 20px white;
  animation: twinkle 3s ease-in-out forwards;
}

@keyframes twinkle {
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(0.5); opacity: 0; }
}
`;
document.head.appendChild(style);
