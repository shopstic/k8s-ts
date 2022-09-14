import pascalCase from "https://deno.land/x/case@2.1.1/pascalCase.ts";

const specUrl = Deno.args[0];

if (typeof specUrl !== "string") {
  throw new Error("Spec url is required, pass it as the first argument");
}

const spec = await (await fetch(specUrl)).json();
const definitions = spec.definitions;
const aliases = Object.keys(definitions).map((key) => `export type ${pascalCase(key)} = K8s["${key}"];`);

console.log(`import type { definitions as K8s } from "./openapi.ts";`);

aliases.forEach((line) => console.log(line));
