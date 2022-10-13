import { inject, injectable } from "inversify";
import { URL } from "url";

import {
  FindBody as FindResponseBody,
  ListBody as ListResponseBody,
  SaveBody as SaveResponseBody,
} from "55tec_integration_lib/model/protocol/integrator/response";
import {
  Request,
  Body as RequestBody,
} from "55tec_integration_lib/model/protocol/integrator/request";

import { Entity } from "55tec_integration_lib/model/metadata/action/entity";
import { Client as BrowserClient } from "55tec_integration_lib/model/protocol/browser";
import { Context } from "55tec_integration_lib/service";
import { TicketService } from "./ticket/ticket.service";
import { CustomerService } from "./customer/customer.service";
import endpoints from '../util/endpoints';

@injectable()
export class VoalleService {
  constructor(
    @inject(TicketService) private readonly ticketService: TicketService,
    @inject(CustomerService) private readonly customerService: CustomerService,
    @inject(BrowserClient) private readonly browserClient: BrowserClient
  ) {}

  public async chooseEvent(info: Request | any) {
    let ctx = new Context(info);

    const [entity, operation] = info.action.split("/");

    if (entity === "functions") {
      return this.browserClient.load(operation);
    }

    switch (info.action) {
      case "incidents/get-metadata":
        return this.ticketService.getMetadata();

      case "incidents/find":
        return this.handleListResult(await this.ticketService.getTickets(info.body?.data['id'],ctx));

      case "incidents/create":
        return this.handleSaveResult(
          info.body,
          await this.ticketService.postTicket(info.body),
          Entity.INCIDENT
        );

      case "customers/get-metadata":
        return this.customerService.getMetadata();

      case "customer/list":
        return this.handleSaveResult(
          info.body,
          await this.customerService.getCustomer(info.body, info.body.data),
          Entity.CUSTOMER
        );

    case "customer/create":
            return this.handleSaveResult(
              info.body,
              await this.customerService.postCustomer(info.body, info.body.data),
              Entity.CUSTOMER
            );
    
      default:
        throw new Error(
          `Não foi registrada nenhuma ação para o id informado: ${info.action}`
        );
    }
  }

  handleListResult(data: any[]): ListResponseBody {
    return {
      pagination: {
        page: 0,
        size: data.length,
      },
      data,
    };
  }

  handleFindResult(
    requestBody: RequestBody,
    data: any,
    entity: Entity
  ): FindResponseBody {
   
    let result: FindResponseBody = { data:data.data };
     result.wwwRef = { model: data.endpoint };

    return result;
  }

  handleSaveResult(
    requestBody: RequestBody,
    id: string,
    entity: Entity
  ): SaveResponseBody {
    let result: SaveResponseBody = { id };
    return result;
  }
}

export default VoalleService;
