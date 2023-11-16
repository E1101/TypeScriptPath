
/**
 * Classes can also use the extends keyword to
 * create an inheritance structure.
 *
 * JavaScript does not support the concept of multiple inheritance
 * when it comes to classes. This means that a class can only inherit
 * from one other class.
 */

class BaseClass implements IBase {
    id: number = 0;
}

class DerivedFromBaseClass extends BaseClass
    implements IDerivedFromBase {
    name: string = "nameString";
}

// A class, however, can implement multiple interfaces, as follows:

interface IFirstInterface {
    id: number;
}
interface ISecondInterface {
    name: string;
}
class MultipleInterfaces implements
    IFirstInterface,
    ISecondInterface
{
    id: number = 0;
    name: string = "nameString";
}
