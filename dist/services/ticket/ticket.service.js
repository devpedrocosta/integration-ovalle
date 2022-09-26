"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.TicketService = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const request_1 = __importStar(require("../../util/request"));
const metadata_decorators_1 = require("../../util/metadata/metadata.decorators");
const http_method_enum_1 = require("../../util/http-method.enum");
const response_1 = require("55tec_integration_lib/model/protocol/integrator/response");
const index_1 = require("55tec_integration_lib/model/protocol/index");
const auth_services_1 = require("../auth/auth.services");
const model_1 = __importStar(require("./model"));
let TicketService = class TicketService {
    constructor(authService) {
        this.authService = authService;
    }
    getMetadata() {
        return (0, metadata_decorators_1.getMetadata)(new model_1.default());
    }
    getTickets(id, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id)
                throw new response_1.ResponseError("Missing parameter id", index_1.StatusCode.BAD_REQUEST);
            const endpoint = `https://${ctx.opts.subdomain}/api/api/events/solicitation_list/${id}`;
            (0, request_1.validateToken)(ctx);
            let result = yield (0, request_1.default)(endpoint, http_method_enum_1.HttpMethod.GET, this.authService.getToken(), {});
            const data = (0, request_1.projectionFilter)(ctx.params.projection, result.data);
            return data;
        });
    }
    solicitationURL(type) {
        switch (type) {
            case model_1.SolicitationEnum.Solicitation:
                return "open_solicitation";
            case model_1.SolicitationEnum.SolicitationCrm:
                return "open_solicitation_crm";
            case model_1.SolicitationEnum.SolicitationSac:
                return "open_solicitation_sac";
            default:
                return "open_solicitation";
        }
    }
    postTicket(requestPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!requestPayload.options.type)
                throw new response_1.ResponseError("Missing parameter type", index_1.StatusCode.BAD_REQUEST);
            const endpoint = `${requestPayload.options.subdomain}/api/api/events/${this.solicitationURL(requestPayload.options.type)}`;
            (0, request_1.validateToken)(requestPayload);
            let method = http_method_enum_1.HttpMethod.POST;
            const result = yield (0, request_1.default)(`https://${endpoint}`, method, this.authService.getToken(), (0, request_1.cleanPayload)(requestPayload === null || requestPayload === void 0 ? void 0 : requestPayload.data));
            if (result.status === 'ERROR') {
                throw new response_1.ResponseError(result.message, index_1.StatusCode.INTERNAL_ERROR);
            }
            return result.protocol;
        });
    }
};
TicketService = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(auth_services_1.AuthService)),
    __metadata("design:paramtypes", [auth_services_1.AuthService])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map