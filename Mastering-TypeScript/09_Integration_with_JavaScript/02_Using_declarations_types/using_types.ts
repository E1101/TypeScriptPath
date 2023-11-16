/**
 * let's install the underscore package and its
 * corresponding types as follows:
 *
 * npm install underscore
 * npm install @types/underscore --save-dev
 *
 * Note that over time, some JavaScript libraries have begun to include
 * declaration files within their main package, and therefore we do not
 * even need to install an @types package in order to use it.
 */

import * as _ from "underscore";

/*
In fact, if we attempt to use a library without installing the associated @types declaration files,
 the TypeScript compiler will generate an error, as follows:

Could not find a declaration file for module 'underscore'
Try `npm i --save-dev @types/underscore` if it exists
or add a new declaration (.d.ts) file containing `declare module 'underscore';
 */
