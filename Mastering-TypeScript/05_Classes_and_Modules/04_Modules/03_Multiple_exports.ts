
/**
 * When working with external libraries, that is, libraries that have been
 * published for general consumption, it is common practice for a published
 * library to export all classes, functions, and interfaces from a single
 * module file. This means that we do not need to know how this library is
 * structured, or how complex the class hierarchy is internally; we simply
 * import the entire library from one file.
 */

import {
    MultipleClass1,
    MultipleClass2
} from "./modules/MultipleExports";

let mc1 = new MultipleClass1();
let mc2 = new MultipleClass2();
