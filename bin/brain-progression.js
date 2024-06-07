#!/usr/bin/env node
import getName from '../src/cli.js';
import brainProgressionGame from "../src/games/brain-progression.js";

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);

brainProgressionGame(name);
