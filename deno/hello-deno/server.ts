import { serve } from "https://deno.land/std@0.97.0/http/server.ts";
const server = serve({ port: 8080 });
console.log("http://localhost:8080/");

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}
