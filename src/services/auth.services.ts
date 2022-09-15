
import "reflect-metadata";
import { injectable } from 'inversify';

import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";

@injectable()
export class AuthService {

    public requestBody: RequestBody = {};

    public setRequest(requestBody: RequestBody) {
        this.requestBody = requestBody;
    };

    public getToken(): any {
        return this.requestBody.credentials && this.requestBody.credentials[0] ? this.requestBody.credentials[0].value : undefined;
    }

}