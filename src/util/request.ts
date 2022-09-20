import request from "request-promise";
import { HttpMethod } from "./http-method.enum";
import urlLib from "url";
import qs from "querystring";
import { Context } from "55tec_integration_lib/service";
import {Credential} from "55tec_integration_lib/model/protocol/integrator/credential";

export class RequestError extends Error {

    code: number;

    constructor(message: string, code: number = 500) {
        super(message);
        this.code = code;
    }

}

export default async (url: string, method: HttpMethod = HttpMethod.GET,token:string, body: {[k: string]: any} = {}) => {

    if(body && method === "get") {
        let parsedUrl = urlLib.parse(url);

        url = `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}?${qs.stringify({
            ...(qs.parse(parsedUrl.query || "")),
            ...body
        })}`;

        body = {};
    }

    let result = await request({
        "rejectUnauthorized": true,
        "url": url,
        "method": method,
        "body": method !== HttpMethod.GET ? JSON.stringify(body) : undefined,
        "headers": {
            "Content-Type": "application/json",
            "Authorization-token": token
        },
        "simple": false,
        "resolveWithFullResponse": true
    });
    if (("" + result.statusCode)[0] !== "2") throw new RequestError(result.body, result.statusCode);
    if (!result.body) return {};
    if (typeof result.body === "string") result = JSON.parse(result.body.trim() || "{}");

    return result;
}


export function validateToken(ctx: Context){
    const token = ctx.credentials!.find((c: Credential) => c.type === "token");

    if (!token) {
        const err = new Error("Missing OAuth token");
        //@ts-ignore
        err.code = 401;
        throw err;
    }
}