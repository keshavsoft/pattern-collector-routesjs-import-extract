# pattern-collector-routesjs-import-extract 🔍

> **A high-performance ESM import statement analyzer that extracts Express router imports specifically from `routes.js` files.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-routesjs-import-extract.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-routesjs-import-extract)
[![license](https://img.shields.io/npm/l/pattern-collector-routesjs-import-extract.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-routesjs-import-extract](https://www.npmjs.com/package/pattern-collector-routesjs-import-extract)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-routesjs-import-extract](https://github.com/keshavsoft/pattern-collector-routesjs-import-extract)
*   📄 **Interactive Docs**: [keshavsoft.github.io/pattern-collector-routesjs-import-extract](https://keshavsoft.github.io/pattern-collector-routesjs-import-extract/)

---

## 📖 Overview

`pattern-collector-routesjs-import-extract` is a lightweight, zero-dependency utility to parse and extract structured information from ESM import statements. It scans file contents and locates imports structured like:

```javascript
import { router as routerFromv1 } from "./v1/routes.js";
```

> [!IMPORTANT]
> **Strict Target Requirement**  
> Starting in **v1.6.0+ (utilizing core v5)**, this collector strictly matches imports targeting **`routes.js`** files specifically. Other import naming conventions (such as `end-points.js` or generic filenames) are intentionally ignored.

---

## ✨ Features

*   **⚡ Zero Dependencies**: Light, fast, and secure.
*   **📂 Focused Route Extraction**: Specifically extracts router imports pointing to `./<folder>/routes.js`.
*   **📦 ESM Native**: Built for modern ES module environments.
*   **🏷️ Structured Outputs**: Returns variables, folders, line contents, and matching line numbers.

---

## 🚀 Installation

```bash
npm install pattern-collector-routesjs-import-extract
```

---

## 🛠️ API Reference

### `default(options)`

#### Parameters

An options object containing:

*   **`fileContent`** `(string)`: The raw JavaScript file/code content to analyze.
*   **`inShowLog`** `(boolean)` (optional): Set to `true` to log collected matches to the console.

#### Returns

*   `(Object[])`: An array of matches, where each match has the structure:
    *   `variable` `(string)`: The imported router alias (e.g. `routerFromv1`).
    *   `folderName` `(string)`: The subdirectory name (e.g. `v1`).
    *   `line` `(string)`: The complete matching import line.
    *   `lineNumber` `(number)`: The line number in the source file.

---

## 💻 Usage Example

```javascript
import routeImportExtract from 'pattern-collector-routesjs-import-extract';

const code = `
import express from 'express';

import { router as routerFromv1 } from "./v1/routes.js";
import { router as routerFromv2 } from "./v2/routes.js";
`;

const results = routeImportExtract({
  fileContent: code,
  inShowLog: false
});

console.log(results);
/*
Output:
[
  {
    variable: 'routerFromv1',
    folderName: 'v1',
    line: 'import { router as routerFromv1 } from "./v1/routes.js";',
    lineNumber: 4
  },
  {
    variable: 'routerFromv2',
    folderName: 'v2',
    line: 'import { router as routerFromv2 } from "./v2/routes.js";',
    lineNumber: 5
  }
]
*/
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
