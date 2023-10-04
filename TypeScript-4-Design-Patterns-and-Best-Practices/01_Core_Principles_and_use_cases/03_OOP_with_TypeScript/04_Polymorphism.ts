/**
 * Polymorphism is a concept that allows objects to behave differently depending on the context,
 * thus having many forms. We can achieve polymorphism with TypeScript using method overloading.
 * This means that we have a parent class with a method and we extend it using a subclass that
 * provides a method with the same signature:
 */
class Component {
  onInit(): void {
    console.log("Called from Component");
  }
}

class ReactComponent extends Component {
  onInit(): void {
    super.onInit();
    console.log("Called from React Component");
  }
}

const c = new ReactComponent();
c.onInit(); // logs "Called from React Component"
