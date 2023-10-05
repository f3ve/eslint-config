# @f3ve/eslint-config

1. Sensible defaults
2. Supports prettier
3. Uses [ESLint Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-2/)
4. Built in configurations:
   1. TypeScript
   2. Prettier
   3. Unocss
   4. Vue
   5. [Recommend ESLint JavaScript config](https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js)

> Inspired by [antfu/eslint-config](https://github.com/antfu/eslint-config)

## Installation

> Notes: requires eslint

1. npm

```bash
npm i @f3ve/eslint-config
```

2. pnpm

```bash
pnpm add @f3ve/eslint-config
```

3. yarn

```bash
yarn add @f3ve/eslint-config
```

## Usage

see my websites [eslint.config.js file](https://github.com/f3ve/freedomevenden.com/blob/main/eslint.config.js) for a working example

### Basic, no additional configs

```js
// eslint.config.js
import f3ve from '@f3ve/eslint-config';

export default f3ve(opts);
```

### With additional configs

```js
import f3ve from '@f3ve/eslint/config';

export default [
  ...f3ve(opts),

  /* ... Additional configs ... */
];
```

### Options

See [Options type definition](/src/types.ts)

#### Example

```js
import f3ve from '@f3ve/eslint/config';

export default f3ve({
    prettier: true,
    vue: true,
    typescript: true,
    browser: true,
  }),
```

## Contributing

Please refer to [Contributing](https://github.com/f3ve/.github/blob/main/CONTRIBUTING.md)

## License

[MIT](https://github.com/f3ve/eslint-config/blob/main/LICENSE)
