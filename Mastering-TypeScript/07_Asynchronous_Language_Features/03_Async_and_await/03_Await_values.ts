
// Let's take a look at this in action, starting with
// a Promise that returns some values, as follows:
function promiseWithValues(): Promise<string[]> {
    return new Promise<string[]>(
        (
            resolve: (values: string[]) => void,
            reject: (error: string) => void
        ) => {
            resolve(["first", "second"]);
        }
    );
}

async function getValuesFromPromise() {
    let values = await promiseWithValues();
    for (let value of values) {
        console.log(`value : ${value}`)
    }
}

getValuesFromPromise();
