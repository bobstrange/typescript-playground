import { add, multiply } from "https://x.nest.land/ramda@0.27.2/mod.ts";

function totalCost(outbound: number, inbound: number, tax: number): number {
  return multiply(add(outbound, inbound), tax);
}

console.log(totalCost(19, 31, 1.2));
console.log(totalCost(45, 27, 1.15));

/**
 * deno run hello-deno/src/05_modules/remote.ts
 */
