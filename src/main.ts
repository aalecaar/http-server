import { sayHi } from "./xx/xx.ts";

export function add(a: number, b: number): number {
  return a + b;
}

sayHi("Del");


if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
