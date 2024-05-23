#!/usr/bin/env node
import readlineSync from "readline-sync";

const generateValue = () => {
    return Math.floor(Math.random() * 50);
}

const generateOperation = () => {
    const operations = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * (operations.length));
    return operations[randomIndex];
}

const generateMathForm = () => {
    const a = generateValue();
    const b = generateValue();
    const operator = generateOperation();
    const mathFormString = `${a} ${operator} ${b}`;
    let resultMathForm;
    switch (operator) {
        case '+':
            resultMathForm = a + b;
            break;
        case '-':
            resultMathForm = a - b;
            break;
        case '*':
            resultMathForm = a * b;
            break;
        default: 'error';
    }
    return [mathFormString, resultMathForm];
}


const gameSet = () => {
    const [value, result] = generateMathForm();
    console.log(`Question: ${value}`);
    const answer = parseInt(readlineSync.question('Your answer: '), 10);
    return [result, answer];
}

const brainCalcGame = (name) => {
    const task = 'What is the result of the expression?';
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

export default brainCalcGame;

// const name = getName();
// console.log('What is the result of the expression?');
//
//
//
// for (let i = 0; i < 3; i++) {
//     const [value, result] = generateMathForm();
//     console.log(`Question: ${value}`);
//     console.log(`result = ${result}`);
//     const answer = parseInt(readlineSync.question('Your answer: '), 10);
//
//
//     if (result === answer) {
//         console.log('Correct!');
//     } else {
//         console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}` );
//         console.log(`Let's try again, ${name}!`);
//         break;
//     }
//
//     if (i === 2) {
//         console.log(`Congratulations, ${name}!`);
//     }
// }