#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';


console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);


const generateValue = () => Math.floor(Math.random() * 50);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const gameSet = () => {
  const question = generateValue();
  const result = isEven(question);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return [result, answer];
};

const brainEvenGame = (name) => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(task);

  for (let i = 0; i < 3; i++) {
    const [result, answer] = gameSet();
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

brainEvenGame(name);
