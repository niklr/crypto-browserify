# crypto-browserify

Source: https://github.com/crypto-browserify/crypto-browserify

The bundled version has been created based on https://github.com/crypto-browserify/crypto-browserify/issues/166

1. npm install -g browserify
2. npm install --save crypto-browserify
3. create main.js with content:

```
var cryptoBrowserify = require('crypto');
// Node.js-style export for Node and Component
if (typeof module != 'undefined') {
    // left here for backwards compatibility
    module.exports = cryptoBrowserify;
    module.exports.cryptoBrowserify = cryptoBrowserify;
} else if (typeof define === "function" && define.amd) {
    // AMD/requirejs: Define the module
    define(function () {
        return cryptoBrowserify;
    });
} else {
    // Browser: Expose to window
    window.cryptoBrowserify = cryptoBrowserify;
}
```

4. browserify main.js -o crypto-browserify.js
