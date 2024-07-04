import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 50);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEvenGame = () => {
  const question = generateValue();
  let result = 'no';
  if (isEven(question)) {
    result = 'yes';
  }
  return { task, question, result };
};

export default () => commonFunc(brainEvenGame, task);
