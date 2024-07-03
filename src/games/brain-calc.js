import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 50);

const generateOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (operations.length));
  return operations[randomIndex];
};

const generataResult = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  } else if (operator === '-') {
    return a - b;
  } else if (operator === '*') {
    return a * b;
  }
}
const generateMathForm = () => {
  const a = generateValue();
  const b = generateValue();
  const operator = generateOperation();
  const mathFormString = `${a} ${operator} ${b}`;
  const resultMathForm = generataResult(a, b, operator);

  return [mathFormString, resultMathForm];
};

const brainCalcGame = () => {
  const task = 'What is the result of the expression?';
  const [question, result] = generateMathForm();
  return { task, question, result };
};

export default (name) => commonFunc(brainCalcGame, name);
