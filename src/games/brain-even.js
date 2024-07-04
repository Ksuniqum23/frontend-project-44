import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 50);

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const brainEvenGame = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = generateValue();
  let result = 'no';
  if (isEven(question) === true) {
    result = 'yes';
  }
  return { task, question, result };
};

export default () => commonFunc(brainEvenGame);
