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

  const form = document.getElementById("volunteerForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for applying to volunteer! We'll be in touch soon.");
    form.reset();
  });

  // Sparkle animation
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
  opacity: 0.7;
  box-shadow: 0 0 10px white;
  animation: sparkleFade 3s ease-in-out;
}

@keyframes sparkleFade {
  0% { opacity: 0; transform: scale(0.6); }
  50% { opacity: 1; transform: scale(1.4); }
  100% { opacity: 0; transform: scale(0.6); }
}
`;
document.head.appendChild(style);
