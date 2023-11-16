
/**
 * The asynchronous nature of JavaScript does take some time to get used to.
 * Any time we need to wait for a resource, or wait for user input, we need
 * to implement a callback mechanism to handle this correctly. Unfortunately,
 * as a code base grows, we find that we need to rely on callbacks more and more.
 * This can easily lead to what is known as callback hell, where we have so many
 * callbacks that are nested in other callbacks that the code becomes increasingly
 * difficult to read and maintain.
 */

import * as fs from 'fs';

fs.readFile("../files/test1.txt", (err, data) => {
    if (err) {
        console.log(`an error occurred : ${err}`);
    } else {
        console.log(`test1.txt contents : ${data}`);
        fs.readFile("../files/test2.txt", (err, data) => {
            if (err) {
                console.log(`an error occurred : ${err}`);
            } else {
                console.log(`test2.txt contents : ${data}`);
                fs.readFile("../files/test3.txt", (err, data) => {
                    if (err) {
                        console.log(`an error occurred : ${err}`);
                    } else {
                        console.log(`test3.txt contents : ${data}`);
                    }
                })
            }
        })
    }
});

// To make asynchronous code a lot simpler, and to eliminate callback hell,
// many different JavaScript libraries implemented similar design patterns to
// make the syntax of callbacks easier to work with. Eventually, these design
// patterns converged into a proposal for the JavaScript language, named Promises.
// Let's take a look at the same code, but using Promises as follows:

fs.promises.readFile("./test1.txt")
    .then((value) => {
        console.log(`ps test1.txt read : ${value}`);
        return fs.promises.readFile("./test2.txt");
    }).then((value) => {
        console.log(`ps test2.txt read : ${value}`);
        return fs.promises.readFile("./test3.txt");
    }).then((value) => {
        console.log(`ps test3.txt read : ${value}`);
    })
    .catch((error) => {
        console.log(`an error occurred : ${error}`);
    });
