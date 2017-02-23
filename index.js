
let counter1 = 0;
async function async1() {
    return counter1++;
}

let counter2 = 0;
async function sync1() {
    return counter2++;
}



async function test1(iterationCount) {
    const start = (new Date).getTime();
    for (let i = 0; i < iterationCount; i++) {
        await async1();
    }
    const end = (new Date).getTime();

    return end - start;
}

async function test2(iterationCount) {
    const start = (new Date).getTime();
    for (let i = 0; i < iterationCount; i++) {
        sync1();
    }
    const end = (new Date).getTime();

    return end - start;
}


async function run() {
    let iterationCount = 100000;

    const result1 = await test1(iterationCount);
    const result2 = await test2(iterationCount);

    console.log('Testing difference between sync and async function calls: (' + iterationCount + ' iterations)')
    console.log('Async: ' + result1 + 'ms');
    console.log('Sync: ' + result2 + 'ms');
    console.log('Async is ~' + parseInt(result1 / result2) + ' times slower');
}

run ();
