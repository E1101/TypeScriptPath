/**
 * A factory object is an abstraction that is responsible for creating objects.
 * The way that it creates them though is the key differentiator.
 *
 * When you have multiple types of objects that either inherit from a similar
 * class or have a similar role, then you may find that passing each type as a
 * parameter is cumbersome. You will have to create all those different function
 * versions or methods to deal with those diverse types.
 *
 * So instead of considering using the new operator to create those objects manually,
 * we define a Factory method called create that accepts either an interface or a type
 * variable that describes what you want to create. This Factory method will abstract
 * all the inner details of creating the right object and return it for you.
 */

export interface Weapon {
  getName(): string;
  getDamage(): number;
  getRange(): number;
}

export class LongSword implements Weapon {
  getName(): string {
    return "LongSword";
  }
  getDamage(): number {
    return 10;
  }
  getRange(): number {
    return 2;
  }
}

export class LongBow implements Weapon {
  getName(): string {
    return "LongBow";
  }
  getDamage(): number {
    return 8;
  }
  getRange(): number {
    return 16;
  }
}

interface WeaponFactory {
  create(): Weapon;
}

export class LongSwordFactory implements WeaponFactory {
  create(): Weapon {
    return new LongSword();
  }
}
export class LongBowFactory implements WeaponFactory {
  create(): Weapon {
    return new LongBow();
  }
}

const lbf = new LongBowFactory();
const lsf = new LongSwordFactory();
const factories: WeaponFactory[] = [lbf, lsf, lbf];
factories.forEach((f: WeaponFactory) => {
  console.debug(f.create());
});
// ---------------------------------------------------------------------------------------------------------------------

/*
 Alternative implementations

 The preceding implementation may work for some time, especially while you're still
 developing the application, but it can swiftly become a burden the more object
 types you add, as you will have to constantly update the WeaponType and switch cases.
 You may have to revisit this code and refactor it to implement a Factory method interface when needed.
 */
const enum WeaponType {
  LONGBOW,
  LONGSWORD,
}

class WeaponCreator {
  create(weaponType: WeaponType): Weapon {
    switch (weaponType) {
      case WeaponType.LONGBOW: {
        return new LongBow();
        break;
      }
      case WeaponType.LONGSWORD: {
        return new LongSword();
        break;
      }
    }
  }
}
