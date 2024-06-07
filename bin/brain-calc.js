#!/usr/bin/env node
import getName from '../src/cli.js';
import brainCalcGame from "../src/games/brain-calc.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

brainCalcGame(name);

