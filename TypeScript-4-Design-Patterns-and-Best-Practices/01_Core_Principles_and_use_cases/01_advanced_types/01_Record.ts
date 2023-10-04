/**
 * [ Record ]
 *
 * If you want to define an object type that contains property keys taken from a specific
 * type and values from another, you should use Record. A common use case is when you want
 * to declare configuration types, as in the following example:
 */
const serviceConfig: Record<string, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

console.log(serviceConfig.port); // prints 3000

/*
Using string as a key type is not very useful as it will accept any type of strings as names,
even when the key is not present. A better way is to provide a list of allowed keys for this
parameter by using unions:
 */
const serviceConfigChecked: Record<
    "port" | "basePath" | "enableStripePayments",
    string | number | boolean
> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: false,
};

/* Then, the compiler can check the allowed types with autocomplete */
console.log(serviceConfig.basePath); // prints http://localhost
// ---------------------------------------------------------------------------------------------------------------------
