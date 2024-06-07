const commonFunc = (game, name) => {
    for (let i = 0; i < 3; i += 1) {
        const [task, result, answer] = game(name);
        console.log(task);
        if (result === answer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
            console.log(`Let's try again, ${name}!`);
            break;
        }

        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

export default commonFunc;
