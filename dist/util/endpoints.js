"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const console_1 = require("console");
var Environment;
(function (Environment) {
    Environment["PRODUCTION"] = "production";
    Environment["SANDBOX"] = "sandbox";
})(Environment = exports.Environment || (exports.Environment = {}));
const URL = {
    [Environment.PRODUCTION]: 'https://erp-production',
    [Environment.SANDBOX]: 'https://erp-staging'
};
function endpoints(environment, patch) {
    console.log;
    let url;
    if (!environment || !Object.values(Environment).includes(environment))
        url = URL[Environment.PRODUCTION];
    else
        url = URL[environment];
    console_1.debug;
    return `${url}/${patch}}`;
}
exports.default = endpoints;
//# sourceMappingURL=endpoints.js.map