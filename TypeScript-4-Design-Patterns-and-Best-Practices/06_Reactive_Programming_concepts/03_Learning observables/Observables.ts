/**
 * An observable represents a sequence that is invokable and produces
 * future values or events. The idea is that you create an observable
 * object and you add observers to it for receiving future values. Once
 * the observable pushes a value, observers will receive them at some point.
 */

// ReactiveX, or RxJS, is a Reactive programming library using observables
// that makes it easier to compose asynchronous data streams.

import { of, from, Observable, interval } from "rxjs";
import { take, share } from "rxjs/operators";

// To start with, you want to create a producer object that invokes future
// streams of data. There are several ways you can do that, starting with
// the observable object:

// From constant values or objects
of(1, 2, 3, 4, 5);
of({ id: 1, data: "value" });

// From array of values
from([1, 2, 3, 4, 5]);

// From a Promise
from(Promise.resolve("users data"));

function* getNextRandom() {
  yield Math.random() * 100;
}

// From a custom producer function
const randomValues = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setInterval(() => {
    subscriber.next(getNextRandom().next().value);
  }, 1000);
});

// randomValues.subscribe((value) => {
//   console.log("Value received: ", value);
// }, undefined);

let origin = from([1, 2, 3, 4, new Error("Error"), 6]);
origin.subscribe(
  (v: any) => {
    console.log("Value accepted: ", v);
  },
  (e) => {
    console.log("Error accepted: ", e);
  },
  () => {
    console.log("Finished");
  }
);

setTimeout(() => {
  origin.subscribe(
    (v: number | Error) => {
      console.log("Value accepted: ", v);
    },
    (e) => {
      console.log("Error accepted: ", e);
    },
    () => {
      console.log("Finished");
    }
  );
}, 1000);

const stream$ = interval(1000).pipe(take(5), share());
stream$.subscribe((v) =>
  console.log("Value accepted from first subscriber: ", v)
);

setTimeout(() => {
  stream$.subscribe((v) => {
    console.log("Value accepted from second subscriber: ", v);
  });
}, 2000);
