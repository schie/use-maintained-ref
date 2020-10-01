# use-maintained-ref

> creates a ref that is kept up-to-date

[![NPM](https://img.shields.io/npm/v/use-maintained-ref.svg)](https://www.npmjs.com/package/use-maintained-ref) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-maintained-ref
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-maintained-ref'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [schie](https://github.com/schie)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
