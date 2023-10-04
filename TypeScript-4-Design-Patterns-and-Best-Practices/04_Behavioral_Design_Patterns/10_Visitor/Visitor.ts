/**
 * In practice, this means that you make your components have a method that
 * accepts a reference of a Visitor object and passes its own instance as a
 * parameter to this visitor. The visitor, on the other hand, will have access
 * to each type of visited object's public methods and they can aggregate the
 * state of each object it visits into a different result.
 *
 * What you gain from this pattern is it allows you to add functions to existing
 * classes without modifying their source. As long as the data you have is accessible
 * using the public instance methods, you can use different Visitor implementations
 * that perform logic on those objects without changing their internal structure.
 */

export interface DocumentVisitor {
  visitConcreteDocumentA(concreteDocumentA: ConcreteDocumentA): void;
  visitConcreteDocumentB(concreteDocumentB: ConcreteDocumentB): void;
}

export interface AcceptsVisitor {
  accept(visitor: DocumentVisitor): void;
}

export class ConcreteDocumentA implements AcceptsVisitor {
  accept(visitor: DocumentVisitor): void {
    visitor.visitConcreteDocumentA(this);
  }
}

export class ConcreteDocumentB implements AcceptsVisitor {
  accept(visitor: DocumentVisitor): void {
    visitor.visitConcreteDocumentB(this);
  }
}

export class ConcreteDocumentVisitor implements DocumentVisitor {
  visitConcreteDocumentA(concreteDocumentA: ConcreteDocumentA): void {
    console.log("ConcreteDocumentVisitor visits ConcreteDocumentA");
  }

  visitConcreteDocumentB(concreteDocumentB: ConcreteDocumentB): void {
    console.log("ConcreteDocumentVisitor visits ConcreteDocumentB");
  }
}

export class CompositeDocument implements AcceptsVisitor {
  private documents: AcceptsVisitor[] = [];

  public addDocument(d: AcceptsVisitor): void {
    this.documents.push(d);
  }

  public accept(visitor: DocumentVisitor): void {
    for (let document of this.documents) {
      document.accept(visitor);
    }
  }
}

const composite = new CompositeDocument();
const visitor = new ConcreteDocumentVisitor();
composite.addDocument(new ConcreteDocumentA());
composite.addDocument(new ConcreteDocumentB());
composite.accept(visitor);
