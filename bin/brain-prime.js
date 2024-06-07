#!/usr/bin/env node
import brainPrimeGame from '../src/games/brain-prime.js';
import { sayHello } from '../src/games/brain-games.js';

const name = sayHello();
brainPrimeGame(name);
