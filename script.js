let current = 0;

function nextSection() {
  document.getElementById("section" + current).classList.remove("active");
  current++;
  document.getElementById("section" + current).classList.add("active");
}

function revealFinal() {
  document.getElementById("section" + current).classList.remove("active");
  document.getElementById("finalSection").classList.add("active");
  launchConfetti();
}

// Days Counter
function calculateDays() {
  const startDate = new Date("2024-04-07");
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById("daysCounter").innerText =
    "Days since I chose you: " + diffDays;
}

calculateDays();

// Confetti Effect
function launchConfetti() {
  const colors = ["#ff4d6d", "#ffffff", "#ff8fa3"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
