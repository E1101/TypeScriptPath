/**
 * The State pattern deals with state management concerning a particular
 * object and, more specifically, how to make an object behave differently
 * based on its inner state.
 *
 * You have an object that responds differently depending on its internal state:
 *   Say you have an object that operates internally based on some data
 *   parameters of its own. For example, it may be certain flags, types,
 *   or values that make the object perform differently. You want to be
 *   able to provide different values so that the object can change its
 *   behavior.
 *
 * Changing the object's behavior on the fly without changing its class:
 *   You want to have one object accept a state that will define its
 *   behavior at runtime but without subclassing a new object. Instead,
 *   you change its behavior by accepting a state object.
 *
 * The main benefit of this pattern is that you can encapsulate all the behaviors in one
 * place and respond based on the existing state that the object holds. If you have many
 * independent state variants, then you will avoid much code duplication when using this
 * pattern.
 *
 * If you allow only a few variations that you need to check, then it may not be worth the
 * effort of using this pattern. In that case, you can merely use the Bridge pattern to
 * define multiple implementations of the same abstraction.
 */

// The onEnterState and reportState methods are optional and are used for
// introspection of the events. For example, you may want to track when
// the state changes and print the current state information. The data
// parameter is an example property that holds specific values.
interface State {
  onEnterState(): void;
  reportState(): void;
  data: any;
}

// The state objects are like data classes as they
// are mostly only there for holding data values.

export class PassiveState implements State {
  data: any;
  constructor() {
    this.data = "Passive data";
  }

  reportState(): void {
    console.log("Originator is in passive mode currently");
  }

  onEnterState(): void {
    console.log("Originator changed into passing mode");
  }
}

export class ActiveState implements State {
  data: any;
  constructor() {
    this.data = "Active data";
  }

  reportState(): void {
    console.log("Originator is in active mode currently");
  }

  onEnterState(): void {
    console.log("Originator changed into active mode");
  }
}

// The logic of using these state objects is performed in the Originator object.

export class Originator {
  private state: State;

  constructor() {
    this.state = new PassiveState();
  }

  changeState(state: State): void {
    this.state = state;
    this.state.onEnterState();
  }

  reportState(): void {
    this.state.reportState();
  }
}

// const originator = new Originator();
// originator.reportState(); // Originator is in passive mode currently

// originator.changeState(new ActiveState()); // Originator changed into active mode
// originator.reportState(); // Originator is in active mode currently
