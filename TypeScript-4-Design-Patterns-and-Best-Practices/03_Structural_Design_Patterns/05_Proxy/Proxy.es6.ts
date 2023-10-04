/**
 * You can also perform Proxy-based operations using the ES6 Proxy classes.
 * Proxy classes are native objects that intercept and redefine fundamental
 * operations for objects that they wrap into. If you provide a base object
 * and a handler, it will forward the call to that handler together with a context.
 *
 * because the ES6 proxies are provided natively from the runtime environment,
 * you are writing more idiomatic code as well.
 */

const textStore = {
  save(data: string): void {
    console.log(`Called 'save' from TextStore with data=${data}`);
  },
};

const proxyTextStore = new Proxy(textStore, {
  apply: function (target, that, args) {
    console.log(`Called 'save' from ProxyTextStore with data=${args}`);
    target.save(args[0]);
  },
});

proxyTextStore.save("Data");
