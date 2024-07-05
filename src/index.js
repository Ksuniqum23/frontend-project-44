import readlineSync from 'readline-sync';
import sayHello from './games/brain-games.js';

const name = sayHello();

const commonFunc = (game, task) => {
  console.log(task);
  const maxLevel = 3;
  for (let i = 0; i < maxLevel; i += 1) {
    const { question, result } = game(name);
    console.log(`Question: ${question}`);

    let answer = readlineSync.question('Your answer: ');;
    if (typeof (result) !== 'string') {
      answer = parseInt(answer);
    }

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default commonFunc;
