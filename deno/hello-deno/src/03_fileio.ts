import { copy } from "https://deno.land/std@0.171.0/streams/conversion.ts";
import { join, fromFileUrl } from "https://deno.land/std@0.171.0/path/mod.ts";

const filenames = Deno.args;

filenames.forEach(async (filename) => {
  console.log(`filename: %c${filename}`, "color: red");
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
});

const text = await Deno.readTextFile(fromFileUrl(import.meta.url));
console.log("text: ", text);

const data = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 21,
  },
];

const dataPath = join(fromFileUrl(import.meta.url), "../../tmp/data.json");
await Deno.writeTextFile(dataPath, JSON.stringify(data));

/**
 * deno run --allow-read --allow-write src/03_fileio.ts /etc/hosts
 */
