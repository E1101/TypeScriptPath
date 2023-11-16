
/**
 * The format of a conditional expression is as follows:
 * (conditional) ? ( true statement ) : ( false statement );
 *
 * we would normally have to use in order to code a simple if then else statement.
 */

// As an example of this syntax, consider the following code:

const value: number = 10;
const message: string = value > 10
    ? "value is larger than 10" : "value is 10 or less";

console.log(message);

// Conditional expressions can be chained together, so either the truth statement
// or the false statement, or both, can include another conditional expression.
