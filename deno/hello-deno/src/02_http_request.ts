/**
 * deno run --allow-net=example.com,jsonplaceholder.typicode.com hello-deno/src/02_http_request.ts https://example.com
 */
const url = Deno.args[0];
const res = await fetch(url);

// const body = new Uint8Array(await res.arrayBuffer());
// await Deno.stdout.write(body);
console.log(await res.text());

const res2 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(await res2.json());
