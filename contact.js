document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("sideMenu");

  toggle.addEventListener("click", () => {
    menu.style.left = (menu.style.left === "0px") ? "-250px" : "0px";
  });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
    form.reset();
  });

  // Sparkles
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
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  opacity: 0.7;
  box-shadow: 0 0 12px white;
  animation: sparkleFade 3s ease-in-out;
}

@keyframes sparkleFade {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.5); }
  100% { opacity: 0; transform: scale(0.5); }
}
`;
document.head.appendChild(style);
