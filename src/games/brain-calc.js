import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 50);

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operations.length));
  return operations[randomIndex];
};

const generateMathForm = () => {
  const a = generateValue();
  const b = generateValue();
  const operator = generateOperation();
  const mathFormString = `${a} ${operator} ${b}`;
  let resultMathForm;
  if (operator === '+') {
    resultMathForm = a + b;
  } else if (operator === '-') {
    resultMathForm = a - b;
  } else if (operator === '*') {
    resultMathForm = a * b;
  }
  return [mathFormString, resultMathForm];
};

const brainCalcGame = () => {
  const task = 'What is the result of the expression?';
  const [question, result] = generateMathForm();
  return { task, question, result };
};

export default (name) => commonFunc(brainCalcGame, name);
