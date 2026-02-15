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

function chooseHurt(type) {
  const response = document.getElementById('response1');
  if (type === 'forgot') {
    response.innerText =
      'Forgetting the date was wrong. But what matters more is how you felt.';
  } else {
    response.innerText =
      'That’s the part that matters. You should never have to compete for effort.';
    document.getElementById('continue1').style.display = 'inline-block';
  }
}

function showStartDate() {
  const startDate = new Date('2022-07-27');
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('startMessage').innerText =
    'That was the day I met you. And I’ve been lucky since.';
  document.getElementById('daysCounter').innerText =
    'Days together: ' + diffDays;
  document.getElementById('continue2').style.display = 'inline-block';
}

function chooseLove(type) {
  const response = document.getElementById('loveResponse');
  const messages = {
    words: 'Then I’ll say it more. You matter to me. Always.',
    time: 'Then I’ll give you more of it. Fully present. No distractions.',
    surprises: 'Then I’ll surprise you when you least expect it.',
    consistency: 'Then you’ll never question my effort again.',
  };
  response.innerText = messages[type];
  document.getElementById('continue3').style.display = 'inline-block';
}

const noButton1 = document.getElementById("noButton1");
const noButton2 = document.getElementById("noButton2");

makeButtonRunAway(noButton1);
makeButtonRunAway(noButton2);
  
function makeButtonRunAway(button) {
  if (!button) return;

  const moveButton = (event) => {
    const btn = event.target; // the button being hovered/clicked
    const container = btn.parentElement;

    // calculate maximum X/Y inside container
    const maxX = container.offsetWidth - btn.offsetWidth;
    const maxY = container.offsetHeight - btn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    btn.style.position = "absolute";
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
  };

  button.addEventListener("mouseenter", moveButton);
  button.addEventListener("click", moveButton);
}

function launchConfetti() {
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        ["#ff4d6d", "#ffffff", "#ff8fa3"][Math.floor(Math.random() * 3)];
      confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
  }
}
