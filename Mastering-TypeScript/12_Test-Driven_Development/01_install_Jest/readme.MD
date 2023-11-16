install the required Jest packages, as follows:

```
npm install jest --save-dev
```

With Jest installed, we can either run it using the command `npx jest`, or we can modify our `package.json` file to specify that Jest will be used when we run npm test.

Jest, by default, will look for files named `*.spec.js` for tests to run. The word spec is short for the word specification, and these spec files therefore contain all of our test specifications. Generally, our test spec files will sit alongside our normal components, in the same directory, so that a component named `search.js` will have a corresponding test spec file named `search.spec.js`.

