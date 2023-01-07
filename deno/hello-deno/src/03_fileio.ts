import { copy } from "https://deno.land/std@0.171.0/streams/conversion.ts";

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
