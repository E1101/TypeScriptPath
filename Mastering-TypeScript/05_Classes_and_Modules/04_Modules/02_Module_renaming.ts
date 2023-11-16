
/**
 * While module renaming is allowed in the module syntax, it's
 * standard practice not to do it at all. The act of reading code,
 * and trying to understand it, means that we start to build a mental
 * model of where each class or interface is defined. Renaming a module
 * within a specific file just makes the act of connecting a class name
 * to a particular file name all that more difficult. Module renaming
 * should only be used in exceptional circumstances, and for a very good reason.
 */

// When importing a symbol from a module, we can also
// choose the name that we want to use when referencing
// the exported symbols within it:

import { Module1 as MyMod1 } from "./modules/Module1";

let myRenamedMod = new MyMod1();
myRenamedMod.print();
