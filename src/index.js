import readlineSync from 'readline-sync';

const commonFunc = (game, name) => {
  const [task, ...rest] = game(name);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [_task, question, result] = game(name);
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

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default commonFunc;
