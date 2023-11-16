/**
 * let's assume that you need to integrate an existing JavaScript
 * helper function into your TypeScript code. As an example of this,
 * consider the following JavaScript code:
 *
 * Here, we have a variable named ErrorHelper that is assigned to what is
 * known as an Immediately Invoked Function Expression, or IIFE.
 * IIFEs are the mechanism that older versions of JavaScript use to
 * simulate classes and namespaces.
 */
var ErrorHelper = (function () {
    return {
        containsErrors: function (response) {
            if (!response || !response.responseText)
                return false;

            var errorValue = response.responseText;

            if (String(errorValue.failure) === "true" || Boolean(errorValue.failure)) {
                return true;
            }

            return false;
        },
        trace: function (msg) {
            var traceMessage = msg;
            if (msg.responseText) {
                traceMessage = msg.responseText.errorMessage;
            }

            console.log("[" + new Date().toLocaleTimeString() + "] " + traceMessage);
        }
    }
})();

// The logic within each of these functions checks for various properties
// within the parameters that are passed in and executes a different code
// path depending on what it finds. As an example of the usage of the
// containsErrors and trace functions, consider the following JavaScript code:

var failureMessage = {
    responseText: {
        "failure": true,
        "errorMessage": "Message From failureMessage"
    }
};

var failureMessageString = {
    responseText: {
        "failure": "true",
        "errorMessage": "Message from failureMessageString"
    }
};

var successMessage = {
    responseText: {
        "failure": false
    }
};

if (ErrorHelper.containsErrors(failureMessage))
    ErrorHelper.trace(failureMessage);

if (ErrorHelper.containsErrors(failureMessageString))
    ErrorHelper.trace(failureMessageString);

if (!ErrorHelper.containsErrors(successMessage))
    ErrorHelper.trace("success");

/*
[8:18:18 PM] Message From failureMessage
[8:18:18 PM] Message from failureMessageString
[8:18:18 PM] success
 */
