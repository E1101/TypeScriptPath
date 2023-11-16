
/**
 * The TypeScript compiler includes experimental support for decorators to
 * carry extra metadata when they are used. This metadata provides us with
 * a little more information with regard to how a decorator is used. In order
 * to activate this feature, we will need to set the `emitDecoratorMetadata`
 * flag in our `tsconfig.json` file to `true`.
 *
 * see tsconfig.json
 */

// Let's now take a closer look at the effect that this compile
// option has on our generated JavaScript:

function metadataParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) { }

class ClassWithMetadata {
    print(
        @metadataParameterDec id: number, name: string
    ) { }
}

// When the emitDecoratorMetadata option in our `tsconfig.json` file is set to `true`,
// however, the generated JavaScript will contain more information, as follows:
// Here, we can see that the call to the `__decorate` function now includes three additional
// array elements, each being a call to a new function named `__metadata`.

function metadataParameterDec(target, methodName, parameterIndex) {}

var ClassWithMetadata = /** @class */ (function () {
    function ClassWithMetadata() {
    }
    ClassWithMetadata.prototype.print = function (id, name) {
    };
    __decorate([
        __param(0, metadataParameterDec),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, String]),
        __metadata("design:returntype", void 0)
    ], ClassWithMetadata.prototype, "print", null);
    return ClassWithMetadata;
}());

/**
 * Using decorator metadata
 *
 * In order to put this extra information that is provided to a decorator to use,
 * we will need to install a third-party library named reflect-metadata, which
 * can be installed using npm:
 *
 * `npm install reflect-metadata`
 */

import 'reflect-metadata';

// We can now start to use this metadata by calling the `Reflect.getMetadata`
// function that this library provides, as follows:

function reflectParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) {
    let designType = Reflect.getMetadata("design:type", target, methodName);
    console.log(`design type: ${designType.name}`)

    let designParamTypes = Reflect.getMetadata("design:paramtypes", target, methodName);
    for (let paramType of designParamTypes) {
        console.log(`param type : ${paramType.name}`);
    }

    let designReturnType = Reflect.getMetadata("design:returntype", target, methodName);
    console.log(`return types : ${designReturnType.name}`);
}


class ClassWithReflectMetaData {
    print(@reflectParameterDec id: number, name: string): number {
        return 1000;
    }
}
/*
design type: Function
param type : Number
param type : String
return types : Number
 */
