const { taskOne, taskTwo } = require('./tasks');

/* Se Demoro 6 Segundos por que el codigo se ejecuta de forma secuencial, es decir uno detras del otro */

async function main() {
    console.time('Measuring time');
    const valueOne = await taskOne();
    const valueTwo = await taskTwo();
    console.timeEnd('Measuring time');

    console.log('Task One Returned => ', valueOne);
    console.log('Task Two Returned => ', valueTwo);
}

main();