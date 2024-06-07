#!/usr/bin/env node
import getName from '../src/cli.js';
import brainGndGame from "../src/games/brain-gcd.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

brainGndGame(name);
