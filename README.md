# react-native-svg-web
[![npm version](https://badge.fury.io/js/react-native-svg-web.svg)](http://badge.fury.io/js/react-native-svg-web)
[![downloads](http://img.shields.io/npm/dm/react-native-svg-web.svg)](https://www.npmjs.com/package/react-native-svg-web)

This package can be used as a drop-in replacement for [react-native-svg](https://github.com/react-native-community/react-native-svg) when targeting the web, or as a mock for [jest](https://github.com/facebook/jest) when testing react-native applications.

### Targeting the Web

Add the following to your webpack configuration:

``` javascript
module.exports = {
  ..., /* the existing configuration */

  resolve: {
    alias: {
      'react-native-svg': 'react-native-svg-web'
    }
  }
};
```

### Mocking with Jest

Add the following to your `package.json`.

``` json
{
  "jest": {
    "setupFiles": [
      "./jest/mocks/react-native-svg.js"
    ]
  }
};
```

And then create a file `./jest/mocks/react-native-svg.js`:

``` javascript
jest.mock('react-native-svg', () => require('react-native-svg-web'));
```
