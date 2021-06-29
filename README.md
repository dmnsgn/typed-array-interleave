# interleave-typed-array

[![npm version](https://img.shields.io/npm/v/interleave-typed-array)](https://www.npmjs.com/package/interleave-typed-array)
[![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)](https://www.npmjs.com/package/interleave-typed-array)
[![npm minzipped size](https://img.shields.io/bundlephobia/minzip/interleave-typed-array)](https://www.npmjs.com/package/interleave-typed-array)
[![dependencies](https://img.shields.io/david/dmnsgn/interleave-typed-array)](https://github.com/dmnsgn/interleave-typed-array/blob/main/package.json)
[![types](https://img.shields.io/npm/types/interleave-typed-array)](https://github.com/microsoft/TypeScript)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fa6673.svg)](https://conventionalcommits.org)
[![styled with prettier](https://img.shields.io/badge/styled_with-Prettier-f8bc45.svg?logo=prettier)](https://github.com/prettier/prettier)
[![linted with eslint](https://img.shields.io/badge/linted_with-ES_Lint-4B32C3.svg?logo=eslint)](https://github.com/eslint/eslint)
[![license](https://img.shields.io/github/license/dmnsgn/interleave-typed-array)](https://github.com/dmnsgn/interleave-typed-array/blob/main/LICENSE.md)

Interleave n typed arrays.

[![paypal](https://img.shields.io/badge/donate-paypal-informational?logo=paypal)](https://paypal.me/dmnsgn)
[![coinbase](https://img.shields.io/badge/donate-coinbase-informational?logo=coinbase)](https://commerce.coinbase.com/checkout/56cbdf28-e323-48d8-9c98-7019e72c97f3)
[![twitter](https://img.shields.io/twitter/follow/dmnsgn?style=social)](https://twitter.com/dmnsgn)

## Installation

```bash
npm install interleave-typed-array
```

## Usage

```js
import interleaveTypedArray from "interleave-typed-array";
interleaveTypedArray(
  Uint8Array,
  [3, 2],
  Uint8Array.of(1, 2, 3, 4, 5, 6),
  Uint8Array.of(7, 8, 9, 10)
);
//=> Uint8Array [1, 2, 3, 7, 8, 4, 5, 6, 9, 10]
```

## API

<!-- api-start -->

<a name="module_interleaveTypedArray"></a>

## interleaveTypedArray

<a name="exp_module_interleaveTypedArray--interleaveTypedArray"></a>

### interleaveTypedArray(ResultConstructor, elements, ...arrays) ⇒ <code>TypedArray</code> ⏏

Interleave n typed arrays

**Kind**: Exported function

| Param             | Type                    | Description                                      |
| ----------------- | ----------------------- | ------------------------------------------------ |
| ResultConstructor | <code>TypedArray</code> | Returned typed array constructor                 |
| elements          | <code>Array</code>      | Number of elements to group for each typed array |
| ...arrays         | <code>TypedArray</code> | Arrays to interleave                             |

<!-- api-end -->

## License

MIT. See [license file](https://github.com/dmnsgn/interleave-typed-array/blob/main/LICENSE.md).
