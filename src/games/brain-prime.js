import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 99) + 2;

const isPrime = (value) => {
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrimeGame = () => {
  const question = generateValue();
  let result = 'no';
  if (isPrime(question)) {
    result = 'yes';
  }
  return { task, question, result };
};

export default () => commonFunc(brainPrimeGame, task);
