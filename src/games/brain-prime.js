import readlineSync from 'readline-sync';

const generateValue = () => Math.floor(Math.random() * 99) + 1;

const isPrime = (value) => {
  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameSet = () => {
  const question = generateValue();
  const result = isPrime(question);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return [result, answer];
};

const brainPrimeGame = (name) => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

export default brainPrimeGame;
