import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";
import request, { validateToken } from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol/index";
import { AuthService } from "../auth/auth.services";
import Ticket from "./model";
import { Context } from "55tec_integration_lib/service";

@injectable()
export class TicketService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Ticket());
  }

  public async getTickets(id: string, ctx: Context) {
    const endpoint = `${ctx.opts.subdomain}/api/api/events/solicitation_list/${id}`;
    validateToken(ctx);

    if (!id)
      throw new ResponseError("Missing parameter id", StatusCode.BAD_REQUEST);

    let result = await request(
      endpoint,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );
    return result;
  }

  public async postTicket(requestPayload: RequestBody, info: any) {
    const endpoint = `${
      requestPayload.options!.subdomain
    }/api/api/events/open_solicitation/`;
    validateToken(requestPayload as any);
    let method = HttpMethod.POST;

    const payload = {
      client_id: info?.call_customer_id || info?.customer_id,
      description: info?.call_description || info?.description,
      contract_service_tag_id: info?.contract_service_tag_id || "55pbx",
    };

    const result = await request(
      `${endpoint}`,
      method,
      this.authService.getToken(),
      payload
    );

    return result || info.id;
  }
}
