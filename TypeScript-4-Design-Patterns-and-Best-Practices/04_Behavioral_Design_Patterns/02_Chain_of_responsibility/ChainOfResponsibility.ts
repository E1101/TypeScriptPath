/**
 * Chain of Responsibility is a pattern that allows you to have a list of classes
 * perform certain operations on a particular object in a series of processing events.
 * The main idea here is to establish a chain of handlers that take an object as part
 * of a request, perform some operation, and then pass on the object to the next handler.
 *
 * The main benefit of this pattern is to avoid coupling all the logic into one function or
 * a class and instead give the chance to several middleware handlers to employ their own
 * distinct behaviors. You can say this pattern resembles a list of Decorator functions,
 * each decorating the same object as it passes along the list.
 */

export interface IRequest {
  getOrigin(): string;
  getParams(): Map<string, string>;
}

export class HTTPRequest implements IRequest {
  constructor(private origin: string, private params: Map<string, string>) {}

  getOrigin(): string {
    return this.origin;
  }

  getParams(): Map<string, string> {
    return this.params;
  }
}

export abstract class RequestHandler {
  constructor(protected next: RequestHandler | null) {}

  handleRequest(request: IRequest) {
    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}

export class LogRequestHandler extends RequestHandler {
  handleRequest(request: IRequest) {
    console.log(
      `Request with origin: ${request.getOrigin()} handled by LogRequestHandler`
    );

    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}

export class EmailRequestHandler extends RequestHandler {
  handleRequest(request: IRequest) {
    console.log(
      `Request with origin: ${request.getOrigin()} handled by EmailRequestHandler`
    );

    if (this.next !== null) {
      this.next.handleRequest(request);
    }
  }
}

const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
new LogRequestHandler(new EmailRequestHandler(null)).handleRequest(req);
// Request with origin: localhost handled by LogRequestHandler
// Request with origin: localhost handled by EmailRequestHandler
