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

const noButton = document.getElementById("noButton");

if (noButton) {
  noButton.addEventListener("mouseenter", moveNoButton);
  noButton.addEventListener("click", moveNoButton);
}

function moveNoButton() {
  const container = document.querySelector(".button-container");

  const maxX = 200;
  const maxY = 100;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.position = "absolute";
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
}
