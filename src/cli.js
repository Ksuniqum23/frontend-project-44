import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getGame = () => {
  const game = readlineSync.question('Choose the game:  ');
  return game;
};

export { getName, getGame };
