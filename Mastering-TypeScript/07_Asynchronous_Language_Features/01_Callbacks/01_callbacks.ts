
/**
 * This sequence of events clearly shows the nature of asynchronous
 * processing in the JavaScript runtime. The runtime will process and
 * execute each line of code that it encounters. If it finds an asynchronous
 * code block, it will place this code block on a queue for later processing.
 * Once this code block is in the queue, the runtime will continue processing
 * our code base, and repeat the process if it encounters any other asynchronous
 * calls. The numbering of the console logs in this example illustrates the
 * execution order of the code.
 */

function delayedResponseWithCallback(callback: () => void) {
    function executeAfterTimeout() {
        console.log(`5. executeAfterTimeout()`);
        callback();
    }

    console.log(`2. calling setTimeout`)
    setTimeout(executeAfterTimeout, 1000);
    console.log(`3. after calling setTimeout`)
}

function callDelayedAndWait() {
    function afterWait() {
        console.log(`6. afterWait()`);
    }

    console.log(`1. calling delayedResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`4. after calling delayedResponseWithCallback`)
}

callDelayedAndWait();
