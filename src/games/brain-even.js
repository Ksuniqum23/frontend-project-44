import readlineSync from 'readline-sync';

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

  for (let i = 0; i < 3; i += 1) {
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

export default brainEvenGame;
