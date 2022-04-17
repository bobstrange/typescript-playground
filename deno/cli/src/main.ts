import { fetchPrograms } from "./api/program.ts";

const result = await fetchPrograms();

console.log(JSON.stringify(result.map((program) => program.title)));
