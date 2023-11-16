
/**
 * A class can mark a function with the static keyword,
 * meaning that there will only be a single instance of
 * this function available throughout the code base. When
 * using a static function, we do not need to create an
 * instance of the class in order to invoke this function.
 */

class StaticFunction {
    static printTwo() {
        console.log(`2`)
    }
}

StaticFunction.printTwo();
