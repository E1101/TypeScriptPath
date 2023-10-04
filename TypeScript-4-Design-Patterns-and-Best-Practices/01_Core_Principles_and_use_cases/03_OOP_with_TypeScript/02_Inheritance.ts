/**
 * Inheritance is a way to extend or augment existing objects for a specific purpose.
 * This extended object becomes a child or subclass object and the initial object becomes
 * the parent object. If left as it is, the child object inherits all properties and
 * methods from the parent object; however, you always want to override one or more
 * specific behaviors for specialization.
 */
class EventAction {
  trigger(delay: number = 0) {
    console.log(`Event triggered in ${delay}s.`);
  }
}

class NotificationEvent extends EventAction {
  sendEmail() {
    console.log("Sending Email");
  }
}

const ev = new NotificationEvent();
ev.trigger();
ev.sendEmail();
ev.trigger(10);
// ---------------------------------------------------------------------------------------------------------------------

/*
 There is no direct way to prevent subclassing in TypeScript.
 The indirect way is to add a check in the constructor to prevent instantiating
 a different prototype from the one creating the object:
 */
class A {
  constructor() {
    this.subClassCheck();
  }

  private subClassCheck(): never | void {
    if (Object.getPrototypeOf(this) !== A.prototype) {
      throw new Error("Cannot extend this class.");
    }
  }
}

class B extends A {}

let a = new A(); // OK
let b = new B(); // fail
// ---------------------------------------------------------------------------------------------------------------------
