import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 20) + 1;

const findDivisor = (a, b) => {
  let d = Math.min(a, b);
  for (d; d > 0; d -= 1) {
    if (a % d === 0 && b % d === 0) {
      return d;
    }
  }
  return 1;
};

const task = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => {
  const a = generateValue();
  const b = generateValue();
  const question = `${a} ${b}`;
  const result = findDivisor(a, b);
  return { task, question, result };
};

export default () => commonFunc(brainGcdGame, task);
