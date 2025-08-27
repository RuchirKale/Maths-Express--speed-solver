document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const questionBox = document.getElementById("question");
  const modeSelect = document.getElementById("modeSelect");

  button.addEventListener("click", () => {
    const mode = modeSelect.value;
    const operators = getOperatorsByMode(mode);
    const numTerms = mode === 'medium' ? 2 : Math.floor(Math.random() * 2) + 2; // 2 or 3
    const expression = generateExpression(mode, operators, numTerms);
    questionBox.textContent = expression;
  });

  function getOperatorsByMode(mode) {
    return ['+', '-', '*', '/'];
  }

  function generateExpression(mode, operators, numTerms) {
    let expression = "";
    let terms = [];

    for (let i = 0; i < numTerms; i++) {
      let num;
      switch (mode) {
        case 'easy':
          num = Math.floor(Math.random() * 900) + 100; // 100–999
          break;
        case 'medium':
          num = Math.floor(Math.random() * 9000) + 1000; // 1000–9999
          break;
        case 'hard':
          num = Math.floor(Math.random() * 900000) + 10000; // 10000–999999
          break;
      }
      terms.push(num);
    }

    if (mode === 'medium') {
      const op = operators[Math.floor(Math.random() * operators.length)];
      expression = `${terms[0]} ${op} ${terms[1]}`;
    } else {
      for (let i = 0; i < terms.length; i++) {
        expression += terms[i];
        if (i < terms.length - 1) {
          const op = operators[Math.floor(Math.random() * operators.length)];
          expression += ` ${op} `;
        }
      }
    }

    return expression;
  }
});
