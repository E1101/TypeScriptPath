Structural design patterns are design patterns that help developers discover and implement more convenient ways to establish relationships between objects. They create abstractions to facilitate the cross-functional use of entities without introducing extra coupling. You will find that these patterns are widely used in the real world as they allow room for extensibility without sacrificing flexibility.

Their main characteristic is to structure objects in a way that is flexible and easy to extend.

We can identify the following scenarios where structural design patterns can be used:

- Adjusting the layout of the objects to form larger structures:
  You have existing objects and want to add new functionality to them either because the requirements have changed or for code improvement reasons. You don't want to make the entity too big or introduce extra or duplicated code, so you want to make it easy to extend those objects without adding much overhead.
- Simplifying relationships between different entities: There are two main ways we can identify those relationships. An object can contain a reference to another object, which means that it is a has-a relationship. On the other hand, an object can be part of an inheritance model or have the same type facility, in which case we say it's an is-a relationship. Both approaches have pros and cons, although the consensus is to avoid using is-a relationships due to increased coupling. In either case, you want to make those relationships easy to manage, extend, and replace if needed.

