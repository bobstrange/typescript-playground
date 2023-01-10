import { copy } from "https://deno.land/std@0.171.0/streams/conversion.ts";
import { fromFileUrl } from "https://deno.land/std@0.171.0/path/mod.ts";

/**
 * deno run --allow-read hello-deno/src/03_fileio.ts /etc/hosts
 */

const filenames = Deno.args;

filenames.forEach(async (filename) => {
  console.log(`filename: %c${filename}`, "color: red");
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
});

const text = await Deno.readTextFile(fromFileUrl(import.meta.url));
console.log("text: ", text);
