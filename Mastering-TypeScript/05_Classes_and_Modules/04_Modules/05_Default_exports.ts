
/**
 * A module file can also mark an exported item as the default export for
 * the file using the default keyword. While this is generally not used for
 * class definitions, it is sometimes used for function definitions.
 */

// We do not need to use the curly braces, that is, { and },
// but are instead targeting the default export function by name.
import DefaultAdd, { ModuleNonDefaultExport }
    from "./modules/DefaultExport";

let modDefault = DefaultAdd(1, 2);

let modNonDefault = new ModuleNonDefaultExport();
