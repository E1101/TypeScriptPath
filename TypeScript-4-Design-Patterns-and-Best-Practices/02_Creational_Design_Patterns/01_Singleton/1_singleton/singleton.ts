export class Singleton {
  // Stores the singleton instance
  // You want to use a static variable for that as the runtime will -
  // ensure only one instance per class is reserved.
  private static instance: Singleton;

  // Prevents creation of new instances
  private constructor() {}

  // Method to retrieve instance
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton;
