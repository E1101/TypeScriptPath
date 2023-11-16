
function myCallback(text: string): void {
    console.log(`myCallback called with ${text}`);
}

function withCallbackArg(
    message: string,
    callbackFn: (t: string) => void
) {
    console.log(`withCallback called, message : ${message}`);
    callbackFn(`${message} from withCallback"`);
}

withCallbackArg("initial text", myCallback);
withCallbackArg("text", "this is not a function");
