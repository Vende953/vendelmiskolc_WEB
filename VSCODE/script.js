const questions = [
  {
    question: "Mikor volt a mohácsi csata?",
    answers: ["1456", "1526", "1703", "1848"],
    correct: 1
  },
  {
    question: "Ki volt az első magyar király?",
    answers: ["IV. Béla", "Árpád", "Szent István", "Hunyadi János"],
    correct: 2
  },
  {
    question: "Hol zajlott a 1849-es tavaszi hadjárat egyik fontos csatája?",
    answers: ["Debrecen", "Pákozd", "Nagysalló", "Pozsony"],
    correct: 2
  }
];

const quizForm = document.getElementById('quizForm');

questions.forEach((q, index) => {
  const div = document.createElement('div');
  div.classList.add('question');
  div.innerHTML = `<p>${index + 1}. ${q.question}</p>` +
    q.answers.map((ans, i) =>
      `<label><input type="radio" name="q${index}" value="${i}"> ${ans}</label><br>`
    ).join('');
  quizForm.appendChild(div);
});

function submitQuiz() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const questionDiv = quizForm.children[index];
    const labels = questionDiv.querySelectorAll('label');

    labels.forEach((label, i) => {
      const icon = document.createElement('span');
      icon.style.marginLeft = '10px';

      if (i === q.correct) {
        icon.textContent = "✅";
        label.classList.add('correct');
      }

      if (selected && parseInt(selected.value) === i && i !== q.correct) {
        icon.textContent = "❌";
        label.classList.add('incorrect');
      }

      label.appendChild(icon);
    });

    if (selected && parseInt(selected.value) === q.correct) {
      score++;
    }
  });

  resultDiv.innerHTML = `<h2>Eredmény: ${score} / ${questions.length}</h2>`;
}
