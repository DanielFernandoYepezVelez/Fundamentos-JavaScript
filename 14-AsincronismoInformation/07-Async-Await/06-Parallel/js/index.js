const { taskOne, taskTwo } = require('./tasks');

/* Promise.all([Aqui van todos los metodos que queremos que se ejecuten de forma paralela]), por ende, estos valores se almacenan en una variable con dos resultados o tambien se puede hacer destructuring del array del Promise.all. */

/* Solo Demoro 4 Segundos por que el codigo se ejecuta en paralelo y promise all los controla */

async function main() {
    console.time('Measuring time');
    // const result = await Promise.all([taskOne, taskTwo])
    const [valueOne, valueTwo] = await Promise.all([taskOne(), taskTwo()]);
    console.timeEnd('Measuring time');

    // console.log('Task One Returned => ', result[0]);
    // console.log('Task Two Returned => ', result[1]);
    console.log('Task One Returned => ', valueOne);
    console.log('Task Two Returned => ', valueTwo);
}

main();