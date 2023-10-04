/**
 * The Adapter pattern deals with interfacing two different objects without
 * changing their implementation part. You want to call new object methods
 * using an existing interface but because they don't have something in common,
 * you use a wrapper to connect them.
 *
 * An Adapter is like a wrapper. It wraps one object in a new structure or interface
 * that can be used in a client that expects that interface. This way, you can expand
 * the usage of a particular object and make it work across incompatible interfaces.
 */

/**
 * We have an ActionCreator class implementing the ActionSender
 * interface that a client uses to perform actions
 */

import { EventCreator } from "./EventCreator";

export interface ActionSender {
  sendAction(action: string): Promise<void>;
}

export class ActionCreator implements ActionSender {
  sendAction(action: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log("Event Created: ", action);
      resolve();
    });
  }
}

export interface EventSender {
  sendEvent(eventName: string): void;
}

export class EventAdapter implements ActionSender {
  eventSender: EventSender;
  constructor(eventSender: EventSender = new EventCreator()) {
    this.eventSender = eventSender;
  }
  public async sendAction(action: string): Promise<void> {
    await this.eventSender.sendEvent(action);
  }
}

export class Client {
  // @ts-ignore
  actionCreator: ActionSender;
  call() {
    this.actionCreator = new ActionCreator();
    this.actionCreator.sendAction("Hello");
    this.actionCreator = new EventAdapter(new EventCreator());
    this.actionCreator.sendAction("Another Action");
  }
}

new Client().call();
