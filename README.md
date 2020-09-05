simple URL validator with Typescript for Deno 🦕
# Usag
```js
import { isURL } from "https://deno.land/x/is_url/mod.ts";

// Some use cases and results
console.log(isURL('http://deno.land'))           // true
console.log(isURL('https://deno.land/x/is_url')) // true
console.log(isURL('deno.land'))                  // false
console.log(isURL('google'))                     // false
```
