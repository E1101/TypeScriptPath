/**
 * When writing test cases for this pattern, you want to check that each handler
 * performs as expected when passing a Request object. Additionally, you want to
 * make sure that the Request object is initialized with the correct state.
 */

import { HTTPRequest, LogRequestHandler } from "./ChainOfResponsibility";

const spy = jest.spyOn(console, "log").mockImplementation();

afterAll(() => {
  spy.mockRestore();
});

test("HTTPRequest", () => {
  const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
  expect(req.getOrigin()).toBe("localhost");
  expect(req.getParams()).toEqual(new Map().set("q", "searchTerm"));
});

test("LogRequestHandler", () => {
  const req = new HTTPRequest("localhost", new Map().set("q", "searchTerm"));
  const requestHandler = new LogRequestHandler(null);
  requestHandler.handleRequest(req);
  expect(spy).toHaveBeenCalledTimes(1);
});
