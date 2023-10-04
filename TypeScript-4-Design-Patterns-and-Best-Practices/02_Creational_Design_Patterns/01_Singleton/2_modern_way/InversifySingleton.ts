import "reflect-metadata";
import { injectable, Container } from "inversify";

interface UsersApiService {
  getUsers(): Promise<string[]>;
}

let TYPES = {
  UsersApiService: Symbol("UsersApiService"),
};

@injectable()
class UsersApiServiceImpl implements UsersApiService {
  getUsers(): Promise<string[]> {
    return Promise.resolve(["Alex", "John", "Sarah"]);
  }
}

// set up container
const container = new Container();
// set up bindings
container
  .bind<UsersApiService>(TYPES.UsersApiService)
  .to(UsersApiServiceImpl)
  .inSingletonScope();

container
  .get<UsersApiService>(TYPES.UsersApiService)
  .getUsers()
  .then((res) => console.log(res));

export default container;

/**
 One obvious limitation of this pattern is that you cannot pass on initialization parameters
 when you first instantiate the object. This is because if you think about it for a minute,
 you may realize that if you were allowed to do that, then you would need to create different
 objects every time. Suppose you wanted to pass on a URL path parameter for the UsersAPISingleton class:

 UsersAPISingleton.getInstance('/v1/users').getUsers();
 UsersAPISingleton.getInstance('/v2/users').getUsers();
 */
