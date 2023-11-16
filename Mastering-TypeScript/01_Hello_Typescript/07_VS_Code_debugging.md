Using an IDE such as VS Code allows us to debug our code pretty easily. In order to do this, we will need to modify the TypeScript compilation options, found in tsconfig.json, and add the sourceMap property as follows:

```json
{
    "compilerOptions": {
        "target": "ES3",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "sourceMap": true
    }
}
```

This compiler option will now generate a `.map` file as well as a `.js` file for each of our TypeScript files. Remember that Node is a JavaScript runtime, and will only execute JavaScript code. The VS Code editor, therefore, needs to know how to map the executing JavaScript code back to our TypeScript source. This is what the `.map` file is used for.

