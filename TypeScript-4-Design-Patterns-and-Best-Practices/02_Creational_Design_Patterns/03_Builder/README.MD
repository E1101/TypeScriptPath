# Criticisms of Builder

### A Concrete Builder for each representation: 
To create different representations, you will need to write and maintain distinct Builders. This can become a maintenance issue if you are only creating Builders to differ only in one property. It's best if you provide a general Builder for most of the cases and either use a Director to create complex objects or wait until you need to model a new Concrete Builder for special objects that require a different approach.

### Avoid side effects
You will have to avoid side effects when creating objects such as network requests or those that require OS access. All calls should perform mutable or immutable changes atomically.

### Can be simplified
Sometimes you can create objects in TypeScript by abstracting some parts using a function instead of using those Builder interfaces and excessive setter methods. If you decide to use a function, then make sure it is fairly documented.

