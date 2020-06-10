## String Builder

Simple string builder.

### Example

```ts
import StringBuilder from "https://deno.land/x/stringBuilder/mod.ts";

const builder = new StringBuilder();

builder.loadDataFromFile("meta.json");

console.log(builder.build("Hello &{ Company.Name }.")); // Hello Google.

// Rewrite all data
builder.loadDataFromObject({
  Company: {
    Name: "Microsoft",
  },
});

// Padding inside brackets is optional
console.log(builder.build("Hello &{Company.Name}.")); // Hello Microsoft.

builder.assignDataFromObject({
  Team: {
    Lead: "Jhon",
  },
});

console.log(builder.build("Hello &{ Team.Lead }.")); // Hello Jhon.

builder.assignDataFromFile("animals.json");

console.log(builder.build("Hello &{ Cat.Name } from &{ Company.Name }")); // Hello Molly from Microsoft.
```

#### meta.json

```js
{
  "Company": {
    "Name": "Google"
  }
}

```

#### animals.json

```js
{
  "Cat": {
    "Name": "Molly"
  }
}

```

### Permissions

- allow-read
