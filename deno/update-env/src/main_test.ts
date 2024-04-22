import { $, load } from "../deps.ts";

Deno.test("Test $ works", async () => {
  await $`echo 5`;
});

Deno.test("Run awsdo command and return the output", async () => {
  const env = await load();
  const profile = env["AWS_PROFILE"];
  const result = await $`awsdo --profile ${profile} --duration 12hours`.text();
  console.log(result);
});
