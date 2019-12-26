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