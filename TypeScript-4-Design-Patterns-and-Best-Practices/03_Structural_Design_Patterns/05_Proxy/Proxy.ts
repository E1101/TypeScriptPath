/**
 * One analogy of this pattern is a company secretary accepting calls on
 * behalf of the company director. They can regulate the flow of calls and
 * may or may not forward them to the director based on who is calling and why.
 * This pattern works very similarly to the Decorator pattern that you learned
 * about earlier. It also wraps an object and provides it with extra functionality.
 * With Decorator, you wrapped an object with the same interface and it decorated
 * some of the method calls. You could also add more than one Decorator to the object.
 * However, with Proxy, you usually allow only one proxy per object, and you use it
 * for controlling its access and to delegate its methods.
 */

export interface Store {
  save(data: string): void;
}

export class TextStore implements Store {
  save(data: string): void {
    console.log(`Called 'save' from TextStore with data=${data}`);
  }
}

export class ProxyTextStore implements Store {
  constructor(private textStore?: TextStore) {}

  save(data: string): void {
    console.log(`Called 'save' from ProxyTextStore with data=${data}`);

    if (!this.textStore) {
      console.log("Lazy init: textStore.");
      this.textStore = new TextStore();
    }

    this.textStore.save(data);
  }
}

new ProxyTextStore().save("Data");
//Called 'save' from ProxyTextStore with data=Data
//Lazy init: textStore.
//Called 'save' from TextStore with data=Data
