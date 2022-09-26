"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoalleService = void 0;
const inversify_1 = require("inversify");
const entity_1 = require("55tec_integration_lib/model/metadata/action/entity");
const browser_1 = require("55tec_integration_lib/model/protocol/browser");
const service_1 = require("55tec_integration_lib/service");
const ticket_service_1 = require("./ticket/ticket.service");
const customer_service_1 = require("./customer/customer.service");
let VoalleService = class VoalleService {
    constructor(ticketService, customerService, browserClient) {
        this.ticketService = ticketService;
        this.customerService = customerService;
        this.browserClient = browserClient;
    }
    chooseEvent(info) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let ctx = new service_1.Context(info);
            const [entity, operation] = info.action.split("/");
            if (entity === "functions") {
                return this.browserClient.load(operation);
            }
            switch (info.action) {
                case "incidents/get-metadata":
                    return this.ticketService.getMetadata();
                case "incidents/list":
                    return this.handleListResult(yield this.ticketService.getTickets((_a = info.body) === null || _a === void 0 ? void 0 : _a.data['id'], ctx));
                case "incidents/create":
                    return this.handleSaveResult(info.body, yield this.ticketService.postTicket(info.body), entity_1.Entity.INCIDENT);
                case "customers/get-metadata":
                    return this.customerService.getMetadata();
                case "customer/list":
                    return this.handleSaveResult(info.body, yield this.customerService.getCustomer(info.body, info.body.data), entity_1.Entity.CUSTOMER);
                case "customer/create":
                    return this.handleSaveResult(info.body, yield this.customerService.postCustomer(info.body, info.body.data), entity_1.Entity.INCIDENT);
                default:
                    throw new Error(`Não foi registrada nenhuma ação para o id informado: ${info.action}`);
            }
        });
    }
    handleListResult(data) {
        return {
            pagination: {
                page: 0,
                size: data.length,
            },
            data,
        };
    }
    handleFindResult(requestBody, data, entity) {
        let result = { data: data.data };
        result.wwwRef = { model: data.endpoint };
        return result;
    }
    handleSaveResult(requestBody, id, entity) {
        let result = { id };
        return result;
    }
};
VoalleService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(ticket_service_1.TicketService)),
    __param(1, (0, inversify_1.inject)(customer_service_1.CustomerService)),
    __param(2, (0, inversify_1.inject)(browser_1.Client)),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        customer_service_1.CustomerService,
        browser_1.Client])
], VoalleService);
exports.VoalleService = VoalleService;
exports.default = VoalleService;
//# sourceMappingURL=index.js.map