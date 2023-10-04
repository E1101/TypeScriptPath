/**
 * Abstraction is a way of having implementation details hidden from the client or the user of an object.
 * You can implement abstract entities to provide an interface of allowed operations and then we can provide
 * concrete implementations for those abstractions only when it is needed.
 *
 * You can use abstraction to reduce the cognitive effort when trying to understand the logic behind an operation,
 * usually because this logic is tied to a business rule or it is framework specific.
 */
interface RestApiClient<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
}

interface Site {
  name: string;
}

class SitesApiClient implements RestApiClient<Site> {
  getAll() {
    const res: Site[] = [{ name: "website1" }];
    return Promise.resolve(res);
  }
  getOne(id: string) {
    return Promise.resolve({ name: "website1" });
  }
}
