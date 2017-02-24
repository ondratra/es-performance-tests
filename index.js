
let counter1 = 0;
async function async1() {
    return counter1++;
}

let counter2 = 0;
async function sync1() {
    return counter2++;
}

let counter3 = 0;
async function async2() { // nested
    const innerFunc = async function (tmp) {
        return tmp + tmp % 2;
    };

    return await innerFunc(++counter3);
}

let counter4 = 0;
async function sync2() {
    const innerFunc = function (tmp) {
        return tmp + tmp % 2;
    };

    return innerFunc(++counter4);
}


async function testAsync(iterationCount, testFunc) {
    const start = (new Date).getTime();
    for (let i = 0; i < iterationCount; i++) {
        await testFunc();
    }
    const end = (new Date).getTime();

    return end - start;
}

async function testSync(iterationCount, testFunc) {
    const start = (new Date).getTime();
    for (let i = 0; i < iterationCount; i++) {
        testFunc();
    }
    const end = (new Date).getTime();

    return end - start;
}



function formatThousands(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

async function testeSet1() {
    let iterationCount = 100000;

    const result1 = await testAsync(iterationCount, async1);
    const result2 = await testSync(iterationCount, sync1);

    console.log('Testing difference between sync and async function calls: (' + formatThousands(iterationCount) + ' iterations)')
    console.log('Async: ' + result1 + 'ms');
    console.log('Sync: ' + result2 + 'ms');
    console.log('Async is ~' + parseInt(result1 / result2) + ' times slower');
}

async function testeSet2() {
    let iterationCount = 100000;

    const result1 = await testAsync(iterationCount, async2);
    const result2 = await testSync(iterationCount, sync2);

    console.log('Testing difference between nested sync and async function calls: (' + formatThousands(iterationCount) + ' iterations)')
    console.log('Async: ' + result1 + 'ms');
    console.log('Sync: ' + result2 + 'ms');
    console.log('Async is ~' + parseInt(result1 / result2) + ' times slower');
}

async function runAllTest() {
    await testeSet1();
    await testeSet2();
}

runAllTest();
