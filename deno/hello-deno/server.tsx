/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom"/>
/// <reference lib="dom.asynciterable"/>
/// <reference lib="deno.ns"/>

import { serve, Handler } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

const App = () => {
  return (
    <html>
      <head>Hello deno from JSX</head>
      <body>
        <h1>Hello</h1>
      </body>
    </html>
  );
};

const handler: Handler = (_req) => {
  const html = renderSSR(<App />);
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
};

console.log("Listening on http://localhost:8000");
serve(handler);
