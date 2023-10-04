export interface AsyncRequest<T> {
  success: boolean;
  data?: T;
}

// The asyncpoll function accepts another function parameter named fn
// that will periodically call it and resolve its results. If the result
// is something that the client is interested in, then Promise resolves.
// If, after some time, the poll exceeds the timeout, then Promise rejects.

export async function asyncPoll<T>(
  fn: () => PromiseLike<AsyncRequest<T>>,
  pollInterval = 5 * 1000,
  pollTimeout = 30 * 1000
): Promise<T> {
  const endTime = new Date().getTime() + pollTimeout;

  const checkCondition = (resolve: Function, reject: Function): void => {
    Promise.resolve(fn())
      .then((result) => {
        const now = new Date().getTime();
        if (result.success) {
          resolve(result.data);
        } else if (now < endTime) {
          setTimeout(checkCondition, pollInterval, resolve, reject);
        } else {
          reject(new Error("Reached timeout. Exiting"));
        }
      })
      .catch((err) => {
        reject(err);
      });
  };

  return new Promise(checkCondition);
}

const result = asyncPoll(async () => {
  try {
    const result = await Promise.resolve({ data: "Value" });
    if (result.data) {
      return Promise.resolve({
        success: true,
        data: result,
      });
    } else {
      return Promise.resolve({
        success: false,
      });
    }
  } catch (err) {
    return Promise.reject(err);
  }
});

result.then((d) => {
  console.log(d);
});
// ---------------------------------------------------------------------------------------------------------------------

// Here, we have a list source that we wrap an Iterator on top of.
// The producer pushes new integers into the source, and the consumer
// uses the iterator to poll the new numbers. Note that the producer
// and the consumer work at different rates and there is a risk here
// that the producer might deliver too much data before the consumer
// can process them.

const source = [1, 3, 4];
const iter = new ListIterator(source);

function pollOnData(iterator: ListIterator<number>) {
  while (iterator.hasNext()) {
    console.log("Processing data:", iterator.next());
  }
}

// producer
setTimeout(() => {
  source.push(Math.floor(Math.random() * 100));
}, 1000);

// consumer
setTimeout(() => {
  pollOnData(iter);
}, 2000);
