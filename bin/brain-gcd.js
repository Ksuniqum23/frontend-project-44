#!/usr/bin/env node
import brainGndGame from '../src/games/brain-gcd.js';
import sayHello from '../src/games/brain-games.js';

const name = sayHello();
brainGndGame(name);
