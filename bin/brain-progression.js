#!/usr/bin/env node
import brainProgressionGame from '../src/games/brain-progression.js';
import sayHello from '../src/games/brain-games.js';

const name = sayHello();
brainProgressionGame(name);
