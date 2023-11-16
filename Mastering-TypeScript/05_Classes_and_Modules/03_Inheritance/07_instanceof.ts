
/**
 * JavaScript provides the instanceof operator to test whether the
 * given function name appears in the prototype of an object. In
 * TypeScript terms, the use of this keyword allows us to detect
 * whether an object is an instance of a class, or whether it has
 * been derived from a particular class.
 */

class A { }
class BfromA extends A { }
class CfromA extends A { }
class DfromC extends CfromA { }

console.log(`A instance of A : ${new A() instanceof A}`); // true
console.log(`BfromA instance of A : ${new BfromA() instanceof A}`); // true
console.log(`BfromA instance of BfromA : ${new BfromA() instanceof BfromA}`); // true
console.log(`CfromA instance of BfromA : ${new CfromA() instanceof BfromA}`); // false
console.log(`DfromC instance of CfromA : ${new DfromC() instanceof CfromA}`); // true
console.log(`DfromC instance of A : ${new DfromC() instanceof A}`); // true
