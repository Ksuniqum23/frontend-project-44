import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 99) + 1;

const isPrime = (value) => {
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const brainPrimeGame = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = generateValue();
  const result = isPrime(question);
  return [task, question, result];
};

export default (name) => commonFunc(brainPrimeGame, name);
