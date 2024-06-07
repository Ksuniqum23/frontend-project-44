#!/usr/bin/env node
import brainEvenGame from '../src/games/brain-even.js';
import { sayHello } from '../src/games/brain-games.js';

const name = sayHello();
brainEvenGame(name);
