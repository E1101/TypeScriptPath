/**
 * You can think of this pattern as an object that sits between one
 * service and a complex subsystem of objects. The client will purely
 * use the mediator service to interact with the other end so that it
 * would not know their API or interfaces. This way, the Mediator works
 * as a sole point of reference between them.
 *
 * Mediator shares similar traits with the Façade pattern, because it
 * abstracts the complexity of a complex system. However, with Façade,
 * the client would still access the subsystems through their relevant
 * services. With the Mediator, however, this does not happen as you
 * explicitly prohibit direct communication between objects. Thus, you
 * make it clear that you have only one point of communication and that
 * is through the mediator object.
 */

/**
 * Real-world use cases:
 *
 * - Chatroom application: You are designing a chatroom application and
 * you create entities for the chatroom, chat users, and inbox. You want
 * to implement a feature to allow two users to communicate with each other
 * via direct messages. You don't want to allow one user to directly receive
 * a reference of another user to send a message. Preferably, you'd use a
 * mediator to trigger message events so that whenever a message is posted,
 * it will forward it to the right recipient.
 *
 * - UI elements interacting with each other: You have some UI elements such
 * as an icon with a counter, and in some parts of the application you have
 * a button that, when you click on it, should update that counter after it
 * has performed an operation. You may use this pattern to trigger an event
 * when the button completes the operation so that the mediator will forward
 * a new counter update for that icon.
 */

interface WorkerMediator {
  triggerEvent(sender: object, message: string): void;
}

class WorkerCenter implements WorkerMediator {
  constructor(
    protected workerA: BatchWorker,
    protected workerB: SingleTaskWorker
  ) {
    this.workerA.setMediator(this);
    this.workerB.setMediator(this);
  }

  public triggerEvent(sender: object, message: string): void {
    // Triggers stack overflow error:
    // If you have noticed already, using the Mediator class creates some
    // additional problems if you are not careful. For example, you might
    // easily introduce stack overflows; if one service calls the other through
    // the Mediator, then you risk calling the same function again, which triggers
    // the mediator with the same event. This would create an infinite loop.

    // if (message.startsWith("single_job_completed")) {
    //   this.workerB.performWork();
    // }

    if (message.startsWith("batch_job_completed")) {
      this.workerB.performWork();
    }
  }
}

abstract class Workhorse {
  protected mediator: WorkerMediator | undefined;
  constructor(mediator?: WorkerMediator) {
    this.mediator = mediator;
  }

  setMediator(mediator: WorkerMediator): void {
    this.mediator = mediator;
  }
}

class BatchWorker extends Workhorse {
  public performWork(): void {
    console.log("Performing work in BatchWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "batch_job_completed");
    }
  }

  public finalize(): void {
    console.log("Performing final work in BatchWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "final_job_completed");
    }
  }
}

class SingleTaskWorker extends Workhorse {
  public performWork(): void {
    console.log("Performing work in SingleTaskWorker");
    if (this.mediator) {
      this.mediator.triggerEvent(this, "single_job_completed");
    }
  }
}

const workerA = new BatchWorker();
const workerB = new SingleTaskWorker();
const mediator = new WorkerCenter(workerA, workerB);

workerA.performWork();
