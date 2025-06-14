// Quiz Data
const quiz = [
  { q: "What is 2 + 2?", a: ["3", "4", "5"], correct: 1 },
  { q: "Capital of France?", a: ["London", "Berlin", "Paris"], correct: 2 },
  { q: "Which is a JavaScript framework?", a: ["Laravel", "React", "Django"], correct: 1 }
];

let current = 0, score = 0, answered = false;

function showQuestion() {
  const q = quiz[current];
  document.getElementById('question').textContent = q.q;
  document.getElementById('answers').innerHTML = q.a.map((ans, i) =>
    `<button onclick="answer(${i})">${ans}</button>`
  ).join('');
  document.getElementById('result').textContent = '';
  answered = false;
}

window.answer = function(i) {
  if (answered) return;
  answered = true;
  if (i === quiz[current].correct) {
    score++;
    document.getElementById('result').textContent = "Correct!";
    document.getElementById('result').style.color = "green";
  } else {
    document.getElementById('result').textContent = "Wrong!";
    document.getElementById('result').style.color = "red";
  }
};

document.getElementById('nextBtn').onclick = function() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.getElementById('question').textContent = `Quiz finished! Score: ${score}/${quiz.length}`;
    document.getElementById('answers').innerHTML = '';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('result').textContent = '';
  }
};

showQuestion();

// Joke API
document.getElementById('jokeBtn').onclick = async function() {
  document.getElementById('joke').textContent = "Loading...";
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
  } catch (e) {
    document.getElementById('joke').textContent = "Failed to fetch joke.";
  }
};