#!/usr/bin/env node
import getName from '../src/cli.js';
import brainEvenGame from "../src/games/brain-even.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

brainEvenGame(name);
