/**
 * A Prototype is a kind of object that takes its initial state and
 * properties out of existing objects. The main idea is to avoid having
 * to manually create an object and assign properties to it from another object.
 *
 * You have already created some objects and hold references to them at runtime,
 * and you want to quickly get identical copies without going back to the Factory
 * method and assigning properties again.
 */


// you start with the Prototype interface.
// This contains a single method called clone that
// returns the same interface type.
export interface HeroPrototype {
  clone(): HeroPrototype;
}

export interface Spell {
  name: string;
}

// Sometimes you want to ignore some properties such as IDs or unique
// fields when cloning because you may have unique requirements.
// You can easily modify the clone method to handle that. In this example,
// you can see we ignored the weapon and name properties when cloning.
export class Wizard implements HeroPrototype {
  private spells: Spell[];
  private health: number;

  constructor(private name: string) {
    this.spells = [];
    this.health = 100;
  }

  clone(): Wizard {
    const cloned = Object.create(Wizard.prototype || null);
    Object.getOwnPropertyNames(this).map((key: string) => {
      if (key === "name") {
        cloned[key] = "Unknown";
      } else {
        cloned[key] = this[key];
      }
    });

    return cloned;
  }
}

export class Warrior implements HeroPrototype {
  private weapon: string;
  private health: number;

  constructor(private name: string) {
    this.weapon = "Dagger";
    this.health = 150;
  }

  clone(): Warrior {
    const cloned = Object.create(Warrior.prototype || null);
    Object.getOwnPropertyNames(this).map((key: string) => {
      if (key === "weapon") {
        cloned[key] = "Bare Hands";
      } else {
        cloned[key] = this[key];
      }
    });

    return cloned;
  }
}

let wiz: HeroPrototype = new Wizard("Theo");
let war: HeroPrototype = new Warrior("Mike");
console.debug(wiz.clone());
console.debug(war.clone());
