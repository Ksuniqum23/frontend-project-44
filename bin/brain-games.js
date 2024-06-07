#!/usr/bin/env node
import { sayHello, chooseTheGame } from '../src/games/brain-games.js';

const name = sayHello();
chooseTheGame(name);
