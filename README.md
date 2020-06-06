## String Builder

Simple string builder.

### Example

```ts
import StringBuilder from "https://deno.land/x/string-builder/mod.ts";

const builder = new StringBuilder();

builder.loadDataFromFile("meta.json");

console.log(builder.build("Hello, &{ Company.Name }.")); // Hello, Google.

builder.loadDataFromObject({
  Company: {
    Name: "Microsoft",
  },
});

console.log(builder.build("Hello, &{Company.Name}.")); // Hello, Microsoft.

builder.assignDataFromObject({
  Team: {
    Lead: "Jhon",
  },
});

console.log(builder.build("Hello, &{ Team.Lead }.")); // Hello, Jhon.
```

#### meta.json

```js
{
  "Company": {
    "Name": "Google"
  }
}

```

### Permissions

- allow-read
