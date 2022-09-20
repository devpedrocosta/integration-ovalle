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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const metadata_decorators_1 = require("../../../util/metadata/metadata.decorators");
let Ticket = class Ticket {
};
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'contract_service_tag_id', externalName: 'contract_service_tag_id', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Tag" } }),
    __metadata("design:type", String)
], Ticket.prototype, "contract_service_tag_id", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'client_id', externalName: 'client_id', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Cliente" } }),
    __metadata("design:type", String)
], Ticket.prototype, "client_id", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'description', externalName: 'description', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Descrição" } }),
    __metadata("design:type", String)
], Ticket.prototype, "description", void 0);
Ticket = __decorate([
    (0, metadata_decorators_1.label)(metadata_1.Lang.PT_BR, 'Ticket')
], Ticket);
exports.Ticket = Ticket;
exports.default = Ticket;
//# sourceMappingURL=index.js.map