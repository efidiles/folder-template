# promise-reduce
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

[Reduce][mdn] an array and return a [Promise][promise].

## Installation
```bash
$ npm install promise-reduce
```

## Usage
```js
const reduce = require('promise-reduce')

Promise.resolve([1, 2, 3])
  .then(reduce((prev, next) => prev + next), 0))
// => 6
```

## Why?
This module is basically equivalent to [`bluebird.reduce`][bluebird], but it's handy
to have the one function you need instead of a kitchen sink. Modularity!
Especially handy if you're serving to the browser and need to reduce your
javascript bundle size.

Works great in the browser with
[browserify](http://github.com/substack/node-browserify)!

## See Also
- [promise-each](https://github.com/yoshuawuyts/promise-each)
- [promise-every](https://github.com/yoshuawuyts/promise-every)
- [promise-filter](https://github.com/yoshuawuyts/promise-filter)
- [promise-map](https://github.com/yoshuawuyts/promise-map)
- [promise-some](https://github.com/yoshuawuyts/promise-some)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-reduce.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-reduce
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-reduce.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-reduce
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-reduce.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-reduce?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-reduce.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-reduce

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[bluebird]: https://github.com/petkaantonov/bluebird/blob/master/API.md#reducefunction-reducer--dynamic-initialvalue---promise
