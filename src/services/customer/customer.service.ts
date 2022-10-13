import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";
import request, { validateToken } from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol/index";
import { AuthService } from "../auth/auth.services";
import { Customer } from "./model";
import { Context } from "55tec_integration_lib/service";

@injectable()
export class CustomerService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Customer());
  }

  public async getCustomer(requestPayload: RequestBody, info: any) {
    const endpoint = `${requestPayload.options!.subdomain}/pbx/pbx/events/new/CLIENT_VALIDATE`;
    validateToken(requestPayload as any);
    const payload = {
      token:this.authService.getToken()[0],
      ...requestPayload.data
    }

    let result = await request(
      endpoint,
      HttpMethod.POST,
      this.authService.getToken(),
      payload
    );
    return result;
  }

  public async postCustomer(requestPayload: RequestBody, info: any) {
    const endpoint = `${
      requestPayload.options!.subdomain
    }/api/api/events/new_suspect/`;
    validateToken(requestPayload as any);
    let method = HttpMethod.POST;

    const payload = {
      ...requestPayload.data
    };

    const result = await request(
      `${endpoint}`,
      method,
      this.authService.getToken(),
      payload
    );

    return result.client_id||result.id ;
  }
}
