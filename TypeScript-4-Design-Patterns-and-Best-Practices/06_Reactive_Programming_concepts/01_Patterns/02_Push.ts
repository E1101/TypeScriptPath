/**
 * In the push pattern, the consumer receives new values from the producer as soon as
 * they become available. This is the opposite of the pull pattern and can lead to
 * better efficiency in terms of communication overhead since the responsibility now
 * rests with the producer to push the relevant values to consumers and maybe offer
 * some extra features, such as replays or persisted messages.
 */

import {
  Subject,
  Subscriber,
} from "../../04_Behavioral_Design_Patterns/06_Observer/Observer";

export class Producer extends Subject {
  constructor(private state: number[]) {
    super();
    this.state = state;
  }

  getState(): number[] {
    return this.state;
  }

  setState(state: number[]) {
    this.state = state;
  }
}

export class Consumer implements Subscriber {
  private state: any;

  constructor(private subject: Producer) {}

  public notify(): void {
    this.state = this.subject.getState();
    for (let item of this.state) {
      console.log("Processing data:", item);
    }
  }
}

// On the consumer side, notification is forthcoming from the producer that new
// data is available for processing. On the producer side, notify only has to be
// called on new data values. Here is how you can use the push pattern while using
// the observer pattern:

const producer = new Producer([]);
const subA = new Consumer(producer);
producer.addSubscriber(subA);

const subB = new Consumer(producer);
producer.addSubscriber(subB);

setInterval(() => {
  producer.setState(
    producer.getState().concat(Math.floor(Math.random() * 100))
  );
  producer.notify();
}, 1000);
