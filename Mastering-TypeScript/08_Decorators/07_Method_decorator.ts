/**
 * When a method decorator is called by the JavaScript runtime, it includes the
 * target object that the method is available on, and it also includes the name
 * of the method. We can then use this information to modify the original function.
 */

function methodDec(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`descriptor : ${JSON.stringify(descriptor)}`);

    console.log(`target[methodName] : ${target[methodName]}`);
}

class ClassWithMethodDec {
    @methodDec
    print(output: string) {
        console.log(`ClassWithMethodDec.print` + `(${output}) called.`);
    }
}
/*
target: [object Object]
methodName : print
descriptor : {"writable":true,"enumerable":true,"configurable":true}
target[methodName] : function (output) {
        console.log("ClassWithMethodDec.print"
            + ("(" + output + ") called."));
 }
 */

/**
 * using method decorators
 */

// Consider the following method decorator:

function auditLogDec(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
) {
    let originalFunction = target[methodName];
    let auditFunction = function (this: any) {
        console.log(`1. auditLogDec : overide of ` + ` ${methodName} called`);

        for (let i = 0; i < arguments.length; i++) {
            console.log(`2. arg : ${i} = ${arguments[i]}`);
        }

        originalFunction.apply(this, arguments);
    }

    target[methodName] = auditFunction;

    return target;
}

class ClassWithAuditDec {
    @auditLogDec
    print(arg1: string, arg2: string) {
        console.log(`3. ClassWithMethodDec.print` + `(${arg1}, ${arg2}) called.`);
    }
}

let auditClass = new ClassWithAuditDec();
auditClass.print("test1", "test2");
/*
1. auditLogDec : overide of print called
2. arg : 0 = test1
2. arg : 1 = test2
3. ClassWithMethodDec.print(test1, test2) called.
 */
