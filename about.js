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

  // Sparkling effects
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
  }, 700);
});

// Sparkle style
const style = document.createElement("style");
style.textContent = `
.sparkle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0 0 12px white;
  animation: sparkleFade 3s ease-in-out;
}

@keyframes sparkleFade {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.3); }
  100% { opacity: 0; transform: scale(0.5); }
}
`;
document.head.appendChild(style);
