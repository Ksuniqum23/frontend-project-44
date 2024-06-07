#!/usr/bin/env node
import brainCalcGame from "../src/games/brain-calc.js";
import sayHello from "../src/games/brain-games.js";

const name = sayHello();
brainCalcGame(name);

