#!/usr/bin/env node
import sayHello from '../src/games/brain-games.js';
import brainCalc from '../src/games/brain-calc.js';

const name = sayHello();
brainCalc(name);
