import chalk from "npm:chalk@5";

// @deno-types="npm:@types/express@4"
import express from "npm:express@4";

console.log(chalk.green("Hi there"));

const app = express();
app.get("/", (_, res) => {
  res.send("Hi there");
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

/**
 * deno run --allow-env --allow-read --allow-net src/06_npm_packages.ts
 */
