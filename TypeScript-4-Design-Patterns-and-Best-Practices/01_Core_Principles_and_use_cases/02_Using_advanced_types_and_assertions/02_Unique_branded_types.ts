/**
 * We have mentioned before that TypeScript has a structural type system.
 * This means practically that if two types contain the same structure (the same property names),
 * then they are considered to be compatible in TypeScript. Every so often, you want to
 * overcome this behavior and make sure that you allow only specific kinds of types.
 * This is what a nominal type system does, and it works in other typed programming
 * languages such as Java or Go.
 */

/*
 You can instruct the compiler to check the type carefully by including
 a brand property in a type. brand is a unique property that we attach to
 a type to mark it as special. In practice, we generate a generic type
 that we can utilize to mark as branded types:
 */
type NominalTyped<Type, Brand> = Type & { __type: Brand };
type Point3d = NominalTyped<Point2d & { z: number }, Point2d>;

type Point2d = { x: number; y: number };
function distance1(first: Point2d, second: Point2d) {
  return Math.sqrt(
    Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)
  );
}
// You can call this function by providing an object with the same structure even if its type is not Point2d:
distance1({ x: 1, y: 2 }, { x: 3, y: 4 });

// If you want to only allow Point2d types, you need to change the signature of the function like this:
type NominalPoint2d = NominalTyped<Point2d, "Point2d">;
function distance2(
  first: NominalPoint2d,
  second: NominalPoint2d
) {
  return Math.sqrt(
    Math.pow(first.x - second.x, 2) + Math.pow(first.y - second.y, 2)
  );
}
distance2({ x: 1, y: 2 }, { x: 3, y: 4 });
// ---------------------------------------------------------------------------------------------------------------------

/*
 Another way you can emulate nominal typing is with a unique symbol property.
 You can use that in class declarations, as in the following example:
 */
class User {
  private static readonly __type: unique symbol = Symbol(); // <--

  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

type Account = {
  name: string;
};

function printAccountName(o: User) {
  console.log(o.name);
}

// The presence of the unique symbol property marks this type as uniquely branded.
// This way, the printUserName function will only accept User types and not something different.
printAccountName(new User("Theo"));
printAccountName({name: "Alex"}) // Fail to typecheck
