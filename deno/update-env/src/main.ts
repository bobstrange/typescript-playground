import { parse } from "../deps.ts";
import { STSClient, AssumeRoleCommand } from "../deps.ts";

function usage() {
  console.log(`
  Usage: update-creds --duration <duration sec> --profile <profile> --token <token>

  update-creds --duration 3600 --profile my-profile --token 123456
  `);
}

const { duration, profile, token } = parse(Deno.args, {
  string: ["duration", "profile", "token"],
});

if (!duration || !profile || !token) {
  usage();
  Deno.exit(1);
}

if (Number(duration) <= 0) {
  usage();
  Deno.exit(1);
}

const client = new STSClient({});
const command = new AssumeRoleCommand({
  DurationSeconds: duration,
});
