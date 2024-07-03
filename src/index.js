import readlineSync from 'readline-sync';

const commonFunc = (game, name) => {
  const { task } = game(name);
  console.log(task);
  const maxLevel = 3;
  for (let i = 0; i < maxLevel; i += 1) {
    const { question, result } = game(name);
    console.log(`Question: ${question}`);

    let answer;
    if (typeof (result) === 'string') {
      answer = readlineSync.question('Your answer: ');
    } else {
      answer = parseInt(readlineSync.question('Your answer: '), 10);
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
