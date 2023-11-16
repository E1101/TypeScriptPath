

// This syntax will import all available exports from a module,
// without naming each of them individually, by attaching them
// to a namespace, as follows:

import * as MultipleExports from "./modules/MultipleExports";

let meMc1 = new MultipleExports.MultipleClass1();
let meMc2 = new MultipleExports.MultipleClass2();
