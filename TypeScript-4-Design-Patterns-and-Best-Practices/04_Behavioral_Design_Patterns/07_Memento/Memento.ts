/**
 * Memento is a pattern that deals with saving and restoring an object's
 * state across parts of the application without exposing any implementation
 * details.
 */

// The AppState interface represents the state object that you want to save or restore.
interface AppState {
  data: any;
}

// The Originator class holds this state to perform work and
// updates it when required. Then, it will call the save()
// method, which will return a Memento object.
class Originator {
  constructor(private state: AppState) {}

  save(): Memento {
    return new ConcreteMemento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
  }
}

abstract class Memento {
  constructor(protected state: AppState) {}

  getState(): AppState {
    return this.state;
  }
}

class ConcreteMemento extends Memento {
  getState(): AppState {
    return super.getState();
  }
}

// Think of CareTaker as a storage object. When the user wants to
// restore a previous memento, they will use the restoreLastMemento()
// method, which will update the CareTaker state directly.
export class CareTaker {
  constructor(
    private originator: Originator,
    private mementos: Memento[] = []
  ) {}

  restoreLastMemento() {
    if (this.mementos.length === 0) {
      return;
    }

    const memento = this.mementos.pop()!;
    this.originator.restore(memento);
  }

  saveMemento() {
    this.mementos.push(this.originator.save());
  }
}

const state: AppState = {
  data: "paste data",
};

const originator = new Originator(state);
const caretaker = new CareTaker(originator);
console.log("Originator data:", originator.save().getState().data); // Originator data: paste data

state.data = "many more data";
caretaker.saveMemento();
caretaker.restoreLastMemento();
console.log("Restored data:", originator.save().getState().data); // Restored data: many more data


// interface EditorState {}
// class Editor {
//   constructor(private state: EditorState) {}
//   public save(): Revision {
//     return new Revision(this.state);
//   }
//   public restore(revision: Revision): void {
//     this.state = revision.getState();
//   }
// }

// class Revision {
//   constructor(private state: EditorState) {}
// }

// class RevisionList {
//   private revisions: Revision[] = [];
//   constructor(private editor: Editor) {}
// }
