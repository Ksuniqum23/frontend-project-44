import getName from '../cli.js';

const sayHello = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayHello;
