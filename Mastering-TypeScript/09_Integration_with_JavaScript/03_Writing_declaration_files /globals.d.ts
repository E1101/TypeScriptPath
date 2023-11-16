/**
 * Let's now write a declaration file for the ErrorHelper utility
 * functions and see how it can be used to ensure that this piece
 * of JavaScript is always called with the correct object structures
 * from our TypeScript code.
 */

// TypeScript uses the module keyword as a means of creating a namespace,
// such that all functions or properties of a class can be grouped together
// within the class namespace.

declare module ErrorHelper {
    function containsErrors(response: IResponse): boolean;
    function trace(message: IResponse | string): void;
}

interface IResponse {
    responseText: IFailureMessage;
}

interface IFailureMessage {
    failure: boolean | string;
    errorMessage?: string;
}


