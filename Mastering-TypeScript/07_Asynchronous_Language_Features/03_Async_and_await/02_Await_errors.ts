
/**
 * Some JavaScript runtimes will allow us to get away with unhandled
 * Promise rejections, and some will not. Node, for example, will
 * terminate the running process if a Promise is rejected, and is not
 * handled within a catch block. Other frameworks, such as Angular,
 * will fail silently, which can cause unwanted side effects.
 */

function errorPromise(): Promise<string> {
    return new Promise<string>(
        (
            resolve: (result: string) => void,
            reject: (error: string) => void) => {
            setTimeout(() => {
                console.log(`2. calling reject()`)
                reject("promise rejected");
            }, 1000);
        }
    );
}

// We can now use a try catch block to trap this error, as follows:

async function callErrorPromise() {
    try {
        console.log(`1. calling errorPromise()`);
        await errorPromise();
    } catch (error) {
        console.log(`3. await threw : ${error}`);
    }
}

callErrorPromise();
