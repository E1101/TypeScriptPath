/**
 * Instead of creating your own Singleton implementation and having the class
 * caching this instance, you can leverage the module system loading mechanism.
 *
 * Additionally, you have to understand the caveats of the Node.js module system
 * as it caches the modules based on the absolute required path of this module.
 * As long as we import this file and it resolves to the same absolute path, then
 * the module system will use the same cached instance. It might not be the case if
 * your code resides in node_modules as a dependency with a conflicting version.
 */
class ApiServiceSingleton {}

export default new ApiServiceSingleton();
