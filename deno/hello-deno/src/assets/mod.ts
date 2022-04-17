/** @jsx h */

import { serve, Handler } from "https://deno.land/std@0.135.0/http/server.ts";

const handleRequest: Handler = async (req) => {
  const { pathname } = new URL(req.url);

  if (pathname.startsWith("/style.css")) {
    const file = await Deno.readFile(`${Deno.cwd()}/src/assets/style.css`);
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>`,
    { headers: { "content-type": "text/html" } }
  );
};

console.log("Listening on localhost: 8080");

serve(handleRequest, { port: 8080 });
