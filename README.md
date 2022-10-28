# Know your Platform

A small, dependency free library for testing what browser your code is running in.

![Test result](https://github.com/TheRiver/know-your-platform/actions/workflows/tests.yml/badge.svg)

This is small, dependency free library for testing what browser your code is running in. It is meant to be a simple tool for allowing you to understand what browsers people are using when visiting your website. It is *NOT* meant for writing browser specific code. You should be using feature detection, polyfills, and @support queries if that is your use case. 

## Installing

This can be installed using npm: 

```bash

npm install know-your-platform

```

## Using

```js

import { getBrowser } from 'know-your-platform';

getBrowser(navigator.userAgent);
// -> "<BROWSER_NAME>"

```

### Methods
* #getBrowser.

  Takes a user agent string and returns a string name representing the browser. Possible return
  values include: FIREFOX, CHROME, EDGE, SAFARI,
  OTHER. 

  This does not return browser version numbers. Browsers that it does not know about are returned as OTHER. Note that Internet Explorer
  is returned as OTHER. 

## Running tests

Tests can be run using 

```bash

pnpm test

```


## License

This software is distributed under the MIT license. See the [LICENSE](/LICENSE) file for a copy. 