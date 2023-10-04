/**
 * Similar to Promises, a Future represents an asynchronous computation or
 * task that may resolve or fail. They are created in the same manner as
 * Promises as they accept a resolve and reject callbacks. However, the
 * principal difference between them is that a Promise is eager, and it
 * will try to evaluate as soon as it gets created or invoked. A Future,
 * on the other hand, is lazy and will not evaluate once created.
 *
 * A Future is an object that does not run until you call a special method called
 * fork or run, depending on the implementation. You can chain Future objects together
 * and save them in a variable before calling the fork method. Once you call this method,
 * you cannot chain anything else afterward. Instead, you get back a Cancel function
 * that you can use to abort the task.
 */

// TypeScript does not offer a native implementation of Future,
// but we can create a simple one for our purposes.

import { noop } from "lodash";
export type Reject<TResult = never> = (reason?: any) => void;
export type Resolve<TResult = never> = (t: TResult) => void;

export type Execution<E, T> = (
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => () => void;

class Future<E, T> {
  private fn: Execution<E, T>;

  constructor(ex: Execution<E, T>) {
    this.fn = ex;
  }
  fork(reject: Reject<E>, resolve: Resolve<T>): () => void {
    return this.fn(reject, resolve);
  }

  resolve(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.fn(reject, resolve);
    });
  }

  static success<E, T>(t: T): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      resolve(t);
      return noop;
    });
  }

  static fail<E, T>(err: E): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      reject(err);
      return noop;
    });
  }
  then<A>(f: (t: T) => Future<E, T>): Future<E, T> {
    return new Future((reject: Reject<E>, resolve: Resolve<T>) => {
      return this.fn(
        (err) => reject(err),
        (a: T) => f(a).fork(reject, resolve)
      );
    });
  }
}

const task = new Future<Error, string>((reject, resolve: Resolve<string>) => {
  const v = setTimeout(() => resolve("Result"), 1000);
  return () => clearTimeout(v);
}).then((value: string) => {
  return Future.success(value.toUpperCase());
});
const cancelTask = task.fork(
  (err) => console.error(err),
  (result) => console.warn(`Task Success: ${result}`)
);
