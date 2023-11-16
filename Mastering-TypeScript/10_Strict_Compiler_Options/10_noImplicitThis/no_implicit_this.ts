
class NoImplicitThisClassErroneous {
    id: number = 1;
    printAfterWait() {
        let callback = function () {
            console.log(`this.id : ${this.id}`); // <------ error
        }
        setTimeout(callback, 1000);
    }
}

class NoImplicitThisClass {
    id: number = 1;
    printAfterWait() {
        // function expression
        let callback = () => {
            console.log(`this.id : ${this.id}`);
        }
        setTimeout(callback, 1000);
    }
}

let classInstance = new NoImplicitThisClass();
classInstance.printAfterWait();
