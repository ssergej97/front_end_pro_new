"use strict";

const obj1 = { name: "a" };
const obj2 = { name: "a" };

const input = [obj1, obj1, obj2, obj2, obj1];

function filterUniqueByReference(values) {
  return new Set(values);
}

const result = filterUniqueByReference(input);
// => [obj1, obj2]

console.log(result);
