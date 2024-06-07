import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 50);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = generateValue();
  const result = isEven(question);
  return [task, question, result];
};

export default (name) => commonFunc(brainEvenGame, name);
