#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

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

const gameSet = () => {
  const a = generateValue();
  const b = generateValue();
  console.log(`Question: ${a} ${b}`);
  const answer = parseInt(readlineSync.question('Your answer: '), 10);
  const result = findDivisor(a, b);
  return [result, answer];
};

const brainGndGame = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [result, answer] = gameSet();
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

brainGndGame(name);
