import { serve, Handler } from "https://deno.land/std@0.171.0/http/server.ts";

/**
 * deno run --allow-net --allow-write hello-deno/src/04_http_server.ts 8000
 *  */
const port = Number(Deno.args[0] || 8080);

const handler: Handler = async (_request, _connInfo) => {
  const resp = await fetch("https://api.github.com/users/denoland", {
    headers: { "content-type": "application/json" },
  });

  return new Response(await resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

console.log(`Listening on http://localhost:${port}/`);
serve(handler, { port });
