/**
 * Decorator is a pattern that also acts as a wrapper but only focuses on a single object.
 * It works by changing the existing behavior of the object at runtime without extending it using a subclass.
 *
 * One analogy of this pattern is when you occupy a room and you want to embellish it with flowers.
 * You do not alter anything in the room. Instead, you buy some flowers and make the room pretty and colorful.
 * This is how Decorators work with objects as they enhance their behavior.
 *
 * When you have an object that performs some useful actions, and there is a requirement to include additional
 * functionality when performing those actions, then it makes sense to use a Decorator pattern. The idea is to
 * extend or decorate this object with additional functionality while keeping the original object intact.
 * Decorator can also control when and how the original class method is called, so it can also be used
 * as an access control mechanism.
 */
export interface Event {
  send(message: string): void;
}

export class SendEmailEvent implements Event {
  public send(message: string): void {
    // send event using email client
    console.log("Currently sending event message", message);
  }
}

export class LogEventDecorator implements Event {
  constructor(private event: Event) {
    this.event = event;
  }

  public send(message: string): void {
    console.log("Before sending event message", message);
    this.event.send(message); // forward call to event
    console.log("After sending event message: ", message);
  }
}

const sendEmail: Event = new SendEmailEvent();
const logSendEmail = new LogEventDecorator(sendEmail);
logSendEmail.send("Hi!");
