# Know your Platform

This is a very simple library to enable you to test what browser your code is running in. This is meant as a way to understand your userbase, and *NOT* as a way to write browser specific code. You should be using feature detection, polyfills, and @support queries if that is your use case. 

## Using

```js

import { getBrowser } from 'know-your-platform';

const BROWSER_ID = getBrowser(navigator.userAgent);

```

## Running tests

Tests can be run using 

```bash

pnpm test

```


## License

This software is distributed under the MIT license. See the [LICENSE](/LICENSE) file for a copy. 