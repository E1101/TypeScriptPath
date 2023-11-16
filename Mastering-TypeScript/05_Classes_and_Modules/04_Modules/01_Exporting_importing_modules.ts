
/**
 * There are two things that we need in order to write
 * and use modules. Firstly, a module needs to expose
 * something to the outside world in order for it to
 * be consumed. This is called exporting a symbol from
 * a module, and uses the TypeScript keyword export,
 * similar to what we saw with namespaces.
 */

// Note that we do not specify a `.ts` or a `.js` extension when
// importing modules. The module loader will take care of
// locating the correct file on disk.

import { Module1 } from "./modules/Module1";

let mod1 = new Module1();
mod1.print();
