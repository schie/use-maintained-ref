<h1 align="center" style="border-bottom: none;">useMaintainedRef</h1>
<h3 align="center">A React ref hook that is kept up-to-date</h3>



[![NPM](https://img.shields.io/npm/v/use-maintained-ref.svg)](https://www.npmjs.com/package/use-maintained-ref)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/dw/use-maintained-ref)
[![jest-tests](https://github.com/schie/use-maintained-ref/actions/workflows/jest-tests.yml/badge.svg)](https://github.com/schie/use-maintained-ref/actions/workflows/jest-tests.yml)
[![formatting validating](https://github.com/schie/use-maintained-ref/actions/workflows/format-validation.yml/badge.svg)](https://github.com/schie/use-maintained-ref/actions/workflows/format-validation.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
## Install

```bash
# yarn
$ yarn add use-maintained-ref
# npm
$ npm install --save use-maintained-ref
```

## Usage

```tsx
import * as React from 'react'

import { useMaintainedRef } from 'use-maintained-ref'

const Example = ({ onSomeCallback, someChangingOtherProp }) => {
  const callbackRef = useMaintainedRef(onSomeCallback);

  useEffect(() => {
    callbackRef.current('do a thing');
  }, [someChangingOtherProp]);


  return (
    <div>
      {someChangingOtherProp}
    </div>
  )
}
```

## License

MIT © [schie](https://github.com/schie)

---
