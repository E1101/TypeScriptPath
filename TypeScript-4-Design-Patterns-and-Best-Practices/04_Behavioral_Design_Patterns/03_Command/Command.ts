/**
 * The Command pattern deals with creating special request objects that can be
 * passed as parameters to receiver objects. The main idea of this pattern is
 * that you want to separate a request action from handling each request in a
 * way that both the request and receiver objects are decoupled.
 *
 * This way, you promote the single-responsibility principle, which is part of the
 * SOLID principles, as you separate the responsibilities of the classes that perform
 * actions and the classes that create actions.
 *
 * When to use the Command pattern?
 * - To separate request objects from handlers
 * - Send requests in an asynchronous way
 * - Support operations that operate on the same dataset independently
 *
 * As you can see, there are quite a few elements involved here and you will need to
 * spend some time understanding how each element works and what its responsibilities are.
 * The main benefit of this pattern is that it simplifies operations involving state updates.
 * You add or remove commands to do or undo actions and so on.
 *
 * Quite often, this can also be frustrating when trying to navigate around the code base as
 * you would have to figure out the whole flow of execution and how things work before
 * you change anything.
 */

// You define the Command and Receiver interfaces and
// some concrete implementations. Each command calls a
// specific method of the Receiver object.

interface Command {
  execute();
}

interface Receiver {
  methodA();
  methodB();
}

class ConcreteCommandA implements Command {
  constructor(private receiver: Receiver) {}

  execute() {
    this.receiver.methodA();
  }
}

class ConcreteCommandB implements Command {
  constructor(private receiver: Receiver) {}

  execute() {
    this.receiver.methodB();
  }
}

// Then, you want to define the handler object that
// will accept commands from the client:

interface CommandHandler {
  handle(command: Command);
}

class ConcreteCommandHandler implements CommandHandler {
  private commands: Command[] = [];
  handle(command: Command) {
    command.execute();
    this.commands.push(command);
  }
}

class ConcreteReceiver implements Receiver {
  methodA() {
    console.log("Called method A");
  }

  methodB() {
    console.log("Called method B");
  }
}

const handler = new ConcreteCommandHandler();
const receiver = new ConcreteReceiver();
handler.handle(new ConcreteCommandA(receiver)); // logs Called method A
handler.handle(new ConcreteCommandB(receiver)); // logs Called method B
