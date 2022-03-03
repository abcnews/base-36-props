# base-36-props

Tools for encoding / decoding JavaScript objects to / from base36 strings.

## Usage

### As a CLI

Install globally with `npm i -g @abcnews/base-36-props` to use the `b36p` executable, or use npx:

```sh

npx @abcnews/base-36-props encode '{ x: [true, 1, "1", null] }'
> 3zo7wx3dtlini74hp4rl9mo1n8ns65v1mkcd

npx @abcnews/base-36-props decode 3zo7wx3dtlini74hp4rl9mo1n8ns65v1mkcd
> { x: [true, 1, '1', null] }
```

### As a library (node or browser)

```sh
npm i @abcnews/base-36-props
```

```js
import { encode, decode } from '@abcnews/base-36-props';

encode({ x: [true, 1, '1', null] });
// > 3zo7wx3dtlini74hp4rl9mo1n8ns65v1mkcd

decode('3zo7wx3dtlini74hp4rl9mo1n8ns65v1mkcd');
// > { x: [ true, 1, '1', null ] }
```

A browser usage example is included with this project. To try it:

```sh
git clone https://github.com/abcnews/base-36-props
cd base-36-props
npm run example
```

...then open the console in the browser window that opens, and try out `b36p.encode()` and `b36p.decode()`.

## Hosted tool

A standalone web-based converter is also available [here](https://www.abc.net.au/res/sites/news-projects/base-36-props-converter/1.0.0/).
