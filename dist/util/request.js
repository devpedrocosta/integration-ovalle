"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.RequestError = void 0;
const request_promise_1 = __importDefault(require("request-promise"));
const http_method_enum_1 = require("./http-method.enum");
const url_1 = __importDefault(require("url"));
const querystring_1 = __importDefault(require("querystring"));
class RequestError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.code = code;
    }
}
exports.RequestError = RequestError;
exports.default = (url, method = http_method_enum_1.HttpMethod.GET, token, body = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (body && method === "get") {
        let parsedUrl = url_1.default.parse(url);
        url = `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}?${querystring_1.default.stringify(Object.assign(Object.assign({}, (querystring_1.default.parse(parsedUrl.query || ""))), body))}`;
        body = {};
    }
    let result = yield (0, request_promise_1.default)({
        "rejectUnauthorized": true,
        "url": url,
        "method": method,
        "body": method !== http_method_enum_1.HttpMethod.GET ? JSON.stringify(body) : undefined,
        "headers": {
            "Content-Type": "application/json",
            "Authorization-token": token
        },
        "simple": false,
        "resolveWithFullResponse": true
    });
    if (("" + result.statusCode)[0] !== "2")
        throw new RequestError(result.body, result.statusCode);
    if (!result.body)
        return {};
    if (typeof result.body === "string")
        result = JSON.parse(result.body.trim() || "{}");
    return result;
});
function validateToken(ctx) {
    const token = ctx.credentials.find((c) => c.type === "token");
    if (!token) {
        const err = new Error("Missing OAuth token");
        //@ts-ignore
        err.code = 401;
        throw err;
    }
}
exports.validateToken = validateToken;
//# sourceMappingURL=request.js.map