const re2 = require('re2');

const originalMatch = String.prototype.match;
const originalReplace = String.prototype.replace;
const originalSearch = String.prototype.search;
const originalSplit = String.prototype.split;
const originalExec = RegExp.prototype.exec;
const originalTest = RegExp.prototype.test;

String.prototype.replace = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        const response = new re2(arguments[0]).replace(this, arguments[1]);
        return response;
    }
    return originalReplace.apply(this, arguments);
};

String.prototype.match = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        const response = new re2(arguments[0]).match(this, arguments[1]);
        return response;
    }
    return originalMatch.apply(this, arguments);
};

String.prototype.search = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        const response = new re2(arguments[0]).search(this, arguments[1]);
        return response;
    }
    return originalSearch.apply(this, arguments);
};

String.prototype.split = function () {
    const isRegex = arguments.length > 0 && arguments[0] instanceof RegExp;
    if (isRegex) {
        const response = new re2(arguments[0]).split(this, arguments[1]);
        return response;
    }
    return originalSplit.apply(this, arguments);
};

// RegExp.prototype.exec = function () {
//     console.log('exec', arguments)
//     return
// }

// RegExp.prototype.test = function () {
//     console.log('test', arguments)
//     return
// }

const evilInput = "<!--".repeat(150387).replace(/<!--([\s\S]*?)-->/mg,"")
const evilInput1 = "<!--".repeat(150387).match(/<!--([\s\S]*?)-->/mg,"")
const evilInput2 = "<!--".repeat(150387).search(/<!--([\s\S]*?)-->/mg,"")
const evilInput3 = "<!--".repeat(150387).split(/<!--([\s\S]*?)-->/mg,"")
// const evilInput4 = /<!--([\s\S]*?)-->/.exec("<!--".repeat(150387))
// const evilInput5 = /<!--([\s\S]*?)-->/.test("<!--".repeat(150387))

// In linear time
console.log(evilInput);
console.log(evilInput1);
console.log(evilInput2);
console.log(evilInput3);
// console.log(evilInput4);
// console.log(evilInput5);

