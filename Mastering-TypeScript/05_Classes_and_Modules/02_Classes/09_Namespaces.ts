
/**
 * When working within large projects, and particularly when
 * working with large numbers of external libraries, there
 * may come a time when two classes or interfaces share the
 * same name. TypeScript uses what are known as namespaces
 * to cater for these situations.
 */

namespace FirstNameSpace
{
    // The export keyword will make this class
    // available outside of the namespace itself.
    export class NameSpaceClass { }

    class NotExported { }
}

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
