#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getName();

const generateValue = () => {
    return Math.floor(Math.random() * 10);
}

const generateAmount = () => {
    const variants = [5, 6, 7, 8, 9, 10];
    const randomIndex = Math.floor(Math.random() * (variants.length));
    return variants[randomIndex];
}

const generateHiddenIndex = (arr) => {
    const randomIndex = Math.floor(Math.random() * (arr.length));
    return randomIndex;
}

const generateProgression= () => {
    const start = generateValue();
    const step = generateValue();
    const amount = generateAmount();
    let progression = [start];

    for (let i = 1; i < amount; i++) {
        const newValue = start + step * i;
        progression.push(newValue);
    }
    return progression;

}

const getQuestion = () => {
    const progression = generateProgression();
    const hiddenIndex = generateHiddenIndex(progression);
    const hiddenItem = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return [question, hiddenItem];
}

const gameSet = () => {
    const [question, result] = getQuestion();
    console.log(`Question: ${question}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    return [result, answer];
}

const brainProgressionGame = (name) => {
    const task = 'What number is missing in the progression?';
    console.log(task);
    for (let i = 0; i < 3; i++) {
        const [result, answer] = gameSet();
        if (result === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}` );
            console.log(`Let's try again, ${name}!`);
            break;
        }

        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
}


brainProgressionGame(name);