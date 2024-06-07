import commonFunc from '../index.js';

const generateValue = () => Math.floor(Math.random() * 10);

const generateAmount = () => {
  const variants = [5, 6, 7, 8, 9, 10];
  const randomIndex = Math.floor(Math.random() * (variants.length));
  return variants[randomIndex];
};

const generateHiddenIndex = (arr) => Math.floor(Math.random() * (arr.length));

const generateProgression = () => {
  const start = generateValue();
  const step = generateValue();
  const amount = generateAmount();
  const progression = [start];

  for (let i = 1; i < amount; i += 1) {
    const newValue = start + step * i;
    progression.push(newValue);
  }
  return progression;
};

const getQuestion = () => {
  const progression = generateProgression();
  const hiddenIndex = generateHiddenIndex(progression);
  const hiddenItem = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, hiddenItem];
};

const brainProgressionGame = () => {
  const task = 'What number is missing in the progression?';
  const [question, result] = getQuestion();
  return { task, question, result };
};

export default (name) => commonFunc(brainProgressionGame, name);
