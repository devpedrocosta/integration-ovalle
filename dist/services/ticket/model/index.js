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
exports.SolicitationEnum = exports.Ticket = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const metadata_decorators_1 = require("../../../util/metadata/metadata.decorators");
let Ticket = class Ticket {
};
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'assignment_id', externalName: 'assignment_id', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "ID de atribuição" } }),
    __metadata("design:type", String)
], Ticket.prototype, "assignment_id", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'title', externalName: 'title', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Title" } }),
    __metadata("design:type", String)
], Ticket.prototype, "title", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'protocol', externalName: 'protocol', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Protocolo" } }),
    __metadata("design:type", String)
], Ticket.prototype, "protocol", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'status', externalName: 'status', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Status" } }),
    __metadata("design:type", String)
], Ticket.prototype, "status", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'team', externalName: 'team', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Equipe" } }),
    __metadata("design:type", String)
], Ticket.prototype, "team", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'sector_area', externalName: 'sector_area', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Setor" } }),
    __metadata("design:type", String)
], Ticket.prototype, "sector_area", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'beginning_date', externalName: 'beginning_date', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Data de início" } }),
    __metadata("design:type", String)
], Ticket.prototype, "beginning_date", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'final_date', externalName: 'final_date', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Data final" } }),
    __metadata("design:type", String)
], Ticket.prototype, "final_date", void 0);
Ticket = __decorate([
    (0, metadata_decorators_1.label)(metadata_1.Lang.PT_BR, 'Ticket')
], Ticket);
exports.Ticket = Ticket;
exports.default = Ticket;
var SolicitationEnum;
(function (SolicitationEnum) {
    SolicitationEnum["Solicitation"] = "Solicitation";
    SolicitationEnum["SolicitationCrm"] = "SolicitationCrm";
    SolicitationEnum["SolicitationSac"] = "SolicitationSac";
})(SolicitationEnum = exports.SolicitationEnum || (exports.SolicitationEnum = {}));
//# sourceMappingURL=index.js.map