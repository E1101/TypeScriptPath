Jest is a JavaScript test framework, and as such, will look for JavaScript tests to run within our project. We can either run the TypeScript compiler to generate JavaScript files, or we can use a framework such as ts-jest. ts-jest is a TypeScript to Jest bridge, and will take care of the compilation step, and integration with Jest for us. In fact, ts-jest will compile and execute our TypeScript tests without even generating JavaScript files. This means that we can write unit tests in TypeScript, and ts-jest will run them within Jest seamlessly.


We can install and configure ts-jest as follows:

Note that ts-jest relies on a local version of TypeScript to be installed within our project, so we also need to install the TypeScript npm package in our project directory.

```
npm install ts-jest --save-dev
npx ts-jest config:init
npm install typescript --save-dev
```

