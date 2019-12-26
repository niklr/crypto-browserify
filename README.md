# crypto-browserify

Source: https://github.com/crypto-browserify/crypto-browserify

The bundled version has been created based on https://github.com/crypto-browserify/crypto-browserify/issues/166

1. npm install -g browserify
2. npm install --save crypto-browserify
3. create main.js with content:

```
var crypto = require('crypto');

window.cryptoBrowserify = crypto;
```

4. browserify main.js -o crypto-browserify.js
