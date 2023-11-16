
class ClassWithConstructor {
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}

let classWithConstructor = new ClassWithConstructor(10);

console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`); // classWithConstructor = {"id":10}
