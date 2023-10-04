/**
 * Façade is a pattern that also wraps one or more interfaces and
 * hides the complexities of using complex workflows under a simpler interface.
 *
 * When you have some workflows that need to be orchestrated in a specific manner,
 * such as calling one service and then the other under certain criteria, it's quite
 * tricky to bring this logic across your components every time. With this pattern,
 * you hide all those complexities behind an API and offer a simpler, more readable
 * way to call those workflows. In simple terms, you use a function to wrap many service
 * calls together so that the client will call it with fewer parameters.
 */

class Facade {
  constructor(private serviceA: ServiceA, private serviceB: ServiceB) {}

  perform() {
    this.serviceA.action();
    this.serviceB.action();
    // more complex logic here
  }
}

interface ServiceA {
  action(): void;
}

interface ServiceB {
  action(): void;
}

class ServiceAImpl implements ServiceA {
  action(): void {
    console.log("Performing action on Service A");
  }
}

class ServiceBImpl implements ServiceB {
  action(): void {
    console.log("Performing action on Service B");
  }
}

new Facade(new ServiceAImpl(), new ServiceBImpl()).perform();
