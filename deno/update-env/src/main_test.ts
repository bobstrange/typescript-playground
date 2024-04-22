import { $, load, assertEquals } from "../deps.ts";

Deno.test("Test $ works", async () => {
  await $`echo 5`;
});

Deno.test("Run awsdo command and return the output", async () => {
  const env = await load();
  const profile = env["AWS_PROFILE"];

  const result = await $`awsdo --profile ${profile} --duration 12hours`.text();
  console.log(result);
});

function parseAwsdoResult(input: string) {
  const lines = input.split("\n");

  const awsRegion = lines
    .filter((line) => line.includes("AWS_REGION"))
    .at(0)
    ?.replace("export AWS_REGION=", "");
  const awsAccessKeyId = lines
    .filter((line) => line.includes("AWS_ACCESS_KEY_ID"))
    .at(0)
    ?.replace("export AWS_ACCESS_KEY_ID=", "");
  const awsSecreteAccessKey = lines
    .filter((line) => line.includes("AWS_SECRET_ACCESS_KEY"))
    .at(0)
    ?.replace("export AWS_SECRET_ACCESS_KEY=", "");
  const awsSessionToken = lines
    .filter((line) => line.includes("AWS_SESSION_TOKEN"))
    .at(0)
    ?.replace("export AWS_SESSION_TOKEN=", "");

  return {
    awsRegion,
    awsAccessKeyId,
    awsSecreteAccessKey,
    awsSessionToken,
  };
}

Deno.test("parse awsdo result", async () => {
  const result = `export AWS_REGION=ap-northeast-1
export AWS_ACCESS_KEY_ID=ASIAxxxxxx
export AWS_SECRET_ACCESS_KEY=secret_access_key
export AWS_SESSION_TOKEN=new_session_token
`;
  const { awsRegion, awsAccessKeyId, awsSecreteAccessKey, awsSessionToken } =
    parseAwsdoResult(result);
  assertEquals(awsRegion, "ap-northeast-1");
  assertEquals(awsAccessKeyId, "ASIAxxxxxx");
  assertEquals(awsSecreteAccessKey, "secret_access_key");
  assertEquals(awsSessionToken, "new_session_token");
});

Deno.test("read data from .envrc file", async () => {
  const text = await Deno.readTextFile("src/.envrc_test");
  console.log(text);
});
