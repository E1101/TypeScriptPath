/**
 * This pattern deals with managing efficient usage of memory or space resources by
 * allocating some of the objects internally. At times, when you frequently use objects
 * such as strings or cache values from numerous clients, it becomes enormously expensive
 * to generate them on the fly every time. With this pattern, you provide an interface,
 * so the client can still benefit from using those objects but share them as well as
 * much as possible behind the scenes.
 *
 * One analogy of this pattern is sharing a few traditional costumes among many dancers.
 * Because those costumes are very expensive to buy sometimes, some of the dancers may have
 * to buy new ones but some may distribute them between performances. The manager, for example,
 * takes the role of the Flyweight and decides when they need to purchase new ones or share existing ones.
 */

/**
 * You want to consider using the Flyweight pattern when you want to minimize the use of a large
 * number of objects at some point in the application. In normal operations, this usually translates
 * to common objects such as strings or state variables but it can expand to other types of objects as well.
 * If you find yourself having to create many objects with a duplicated shared state, then you might consider
 * using this pattern to avoid the extra costs.
 */

export interface Flyweight {
  perform(customization: { id: string }): void;
}

export class ConcreteFlyweight implements Flyweight {
  constructor(private sharedState: Object) {}

  public perform(customization: { id: string }): void {
    console.log(
      `Call to ConcreteFlyweight with param: ${customization.id} called`
    );
  }
}

export class FlyweightFactory {
  private cache = new Map<Object, Flyweight>();

  public create(sharedState: Object): Flyweight {
    if (!this.cache.has(sharedState)) {
      this.cache.set(sharedState, new ConcreteFlyweight(sharedState));
    }

    return this.cache.get(sharedState)!;
  }
}

new FlyweightFactory().create({ state: "Initial" }).perform({ id: "abc" });
