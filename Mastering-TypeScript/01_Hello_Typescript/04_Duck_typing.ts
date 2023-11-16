/**
  Duck typing, assignment

  In other words, two variables are considered to have the same
  type if they have the same properties and methods.
*/

var nameIdObject = { name: "myName", id: 1, print() { } };
nameIdObject = { id: 2, name: "anotherName", print() { } };

nameIdObject = { id: 3, name: "thirdName", print() {} , select() {} };

// Duck typing, object assignment

var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }

obj1 = obj2;
obj2 = obj1;

var other = { id: 2, name: "anotherName", print() { }, select() { } };
nameIdObject = other;
