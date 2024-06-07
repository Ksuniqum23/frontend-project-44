#!/usr/bin/env node
import brainGcdGame from '../src/games/brain-gcd.js';
import { sayHello } from '../src/games/brain-games.js';

const name = sayHello();
brainGcdGame(name);
