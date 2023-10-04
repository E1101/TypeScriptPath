/**
 * In order to test this pattern, you want to verify that when calling
 * the clone() method, you get an object with the right state and instance type.
 */

import { Warrior, Wizard, HeroPrototype } from "./Prototype";

test("it creates a Wizard from a prototype", () => {
  const wiz = new Wizard("Theo");
  expect(wiz.clone()).toBeInstanceOf(Wizard);
  expect(JSON.stringify(wiz.clone())).toBe(
    '{"name":"Unknown","spells":[],"health":100}'
  );
});

test("it creates a Warrior from a prototype", () => {
  const war = new Warrior("Alex");
  expect(war.clone()).toBeInstanceOf(Warrior);
  expect(JSON.stringify(war.clone())).toBe(
    '{"name":"Alex","weapon":"Bare Hands","health":150}'
  );
});
