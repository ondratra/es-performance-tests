# ES Performance Tests

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

# Use
`npm run test`

# Example output
```
$ npm run test

> es-performance-tests@0.1.0 test /mnt/work/es-performance-tests
> node --harmony-async-await index.js

Testing difference between sync and async function calls: (100 000 iterations)
Async: 803ms
Sync: 52ms
Async is ~15 times slower
Testing difference between nested sync and async function calls: (100 000 iterations)
Async: 1288ms
Sync: 58ms
Async is ~22 times slower
```
