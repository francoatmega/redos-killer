const re2 = require('re2');

const originalReplace = String.prototype.replace;
const originalSearch = String.prototype.search;
const originalSplit = String.prototype.split;

String.prototype.search = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        return new re2(arguments[0]).search(this.toString());
    }
    return originalSearch.apply(this, arguments);
};

String.prototype.replace = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        return new re2(arguments[0]).replace(this.toString(), arguments[1]);
    }
    return originalReplace.apply(this, arguments);
};

String.prototype.split = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        const response = new re2(arguments[0]).split(this, arguments[1]);
        return response;
    }
    return originalSplit.apply(this, arguments);
};

String.prototype.match = function () {  
    return new re2(arguments[0]).match(this.toString());
}