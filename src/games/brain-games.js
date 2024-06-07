import { getName, getGame } from '../cli.js';
import brainCalcGame from './brain-calc.js';
import brainEven from './brain-even.js';
import brainGcd from './brain-gcd.js';
import brainPrime from './brain-prime.js';
import brainProgression from './brain-progression.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};

const chooseTheGame = (name) => {
  const game = getGame();
  if (game === 'brain-calc') {
    return brainCalcGame(name);
  }
  if (game === 'brain-even') {
    return brainEven(name);
  }
  if (game === 'brain-gcd') {
    return brainGcd(name);
  }
  if (game === 'brain-prime') {
    return brainPrime(name);
  }
  if (game === 'brain-progression') {
    return brainProgression(name);
  }
  return 'I dont know this game';
};

export { sayHello, chooseTheGame };
