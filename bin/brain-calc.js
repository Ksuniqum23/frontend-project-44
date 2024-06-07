#!/usr/bin/env node
// import brainCalcGame from '../src/games/brain-calc.js';
import { sayHello } from '../src/games/brain-games.js';
import brainCalc from '../src/games/brain-calc.js'

const name = sayHello();
brainCalc(name);



