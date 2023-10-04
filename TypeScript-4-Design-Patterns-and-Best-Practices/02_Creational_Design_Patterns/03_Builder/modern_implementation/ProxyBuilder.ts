/**
 * Some modern implementations of this pattern, using TypeScript,
 * try to offer a reusable implementation part that uses ES6 Proxies
 * and Object.assign. This is mainly to avoid reiterating and manually
 * providing setter methods for all the Product properties.
 */

export type Builder<T> = {
  [k in keyof T]-?: (arg: T[k]) => Builder<T>;
} & {
  build(): T;
};

export function ModelBuilder<T>(): Builder<T> {
  const built: Record<string, unknown> = {};
  const builder = new Proxy(
    {},
    {
      // If the message sent is build, then subsequently,
      // it returns the object so far, otherwise,
      // it assigns the property to the object.
      get(target, prop) {
        if ("build" === prop) {
          return () => built;
        }

        return (x: unknown): unknown => {
          built[prop.toString()] = x;
          return builder;
        };
      },
    }
  );

  return builder as Builder<T>;
}

interface UserInfo {
  id: number;
  userName: string;
  email: string;
}

const userInfo = ModelBuilder<UserInfo>()
  .id(1)
  .userName("foo")
  .email("foo@bar.baz")
  .build();

console.debug(userInfo);
