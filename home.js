// Toggle the side menu
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("sideMenu");

  toggle.addEventListener("click", () => {
    if (menu.style.left === "0px") {
      menu.style.left = "-250px";
    } else {
      menu.style.left = "0px";
    }
  });

  // Spontaneous floating sparkles for visual surprise
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
  }, 800);
});

// Add sparkle style
const style = document.createElement("style");
style.textContent = `
  .sparkle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    opacity: 0.6;
    box-shadow: 0 0 10px white;
    animation: twinkle 3s ease-in-out;
  }

  @keyframes twinkle {
    0% { transform: scale(0.5); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0.5); opacity: 0; }
  }
`;
document.head.appendChild(style);
