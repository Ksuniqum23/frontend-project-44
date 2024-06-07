#!/usr/bin/env node
import getName from '../src/cli.js';
import brainPrimeGame from "../src/games/brain-prime.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

brainPrimeGame(name);
