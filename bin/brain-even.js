#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';


const generateValue = () => {
    return Math.floor(Math.random() * 50);
}

const name = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
    const value = generateValue();
    console.log(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ');

    if ((value % 2 === 0 && answer === 'yes') || (value % 2 !== 0 && answer === 'no')) {
        console.log('Correct!');
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'` );
        console.log(`Let's try again, ${name}!`);
        break;
    }

    if (i === 2) {
        console.log(`Congratulations, ${name}!`);
    }
}