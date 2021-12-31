const promises: Promise<void>[] = [];

for await (const entry of Deno.readDir("./src/models")) {
  if (entry.isFile && entry.name.endsWith(".ts")) {
    promises.push(
      (async () => {
        const filePath = `./src/models/${entry.name}`;
        const content = await Deno.readTextFile(filePath);
        await Deno.writeTextFile(
          filePath,
          content
            .replaceAll(
              /(\* IntOrString is a type .+\n\s*\*\/\n\s*"[^"]+"\??: )string;/g,
              "$1number | string;",
            )
            .replaceAll(
              /import { HttpFile } from "\.\.\/http\/http\.ts";\n/g,
              "",
            ),
        );
      })(),
    );
  }
}

await Promise.all(promises);
