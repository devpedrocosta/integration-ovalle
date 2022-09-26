import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Body as RequestBody } from "55tec_integration_lib/model/protocol/integrator/request";
import request, {
  cleanPayload,
  projectionFilter,
  validateToken,
} from "../../util/request";
import { getMetadata } from "../../util/metadata/metadata.decorators";
import { HttpMethod } from "../../util/http-method.enum";
import { ResponseError } from "55tec_integration_lib/model/protocol/integrator/response";
import { StatusCode } from "55tec_integration_lib/model/protocol/index";
import { AuthService } from "../auth/auth.services";
import Ticket, { SolicitationEnum } from "./model";
import { Context } from "55tec_integration_lib/service";

@injectable()
export class TicketService {
  constructor(@inject(AuthService) private readonly authService: AuthService) {}

  public getMetadata() {
    return getMetadata(new Ticket());
  }

  public async getTickets(id: string, ctx: Context) {
    if (!id)
      throw new ResponseError("Missing parameter id", StatusCode.BAD_REQUEST);
    const endpoint = `https://${ctx.opts.subdomain}/api/api/events/solicitation_list/${id}`;
    validateToken(ctx);
    let result = await request(
      endpoint,
      HttpMethod.GET,
      this.authService.getToken(),
      {}
    );
    const data = projectionFilter(ctx.params.projection, result.data);
    return data;
  }

  private solicitationURL(type: SolicitationEnum) {
    switch (type) {
      case SolicitationEnum.Solicitation:
        return "open_solicitation";
      case SolicitationEnum.SolicitationCrm:
        return "open_solicitation_crm";
      case SolicitationEnum.SolicitationSac:
        return "open_solicitation_sac";
      default:
        return "open_solicitation";
    }
  }

  public async postTicket(requestPayload: RequestBody) {
   
    if (!requestPayload.options!.type)
      throw new ResponseError("Missing parameter type", StatusCode.BAD_REQUEST);

    const endpoint = `${
      requestPayload.options!.subdomain
    }/api/api/events/${this.solicitationURL(requestPayload.options!.type)}`;
    validateToken(requestPayload as any);
    let method = HttpMethod.POST;

    const result = await request(
      `https://${endpoint}`,
      method,
      this.authService.getToken(),
      cleanPayload(requestPayload?.data)
    );
    if(result.status==='ERROR'){
      throw new ResponseError(result.message, StatusCode.INTERNAL_ERROR);
    }

    return result.protocol;
  }
}
