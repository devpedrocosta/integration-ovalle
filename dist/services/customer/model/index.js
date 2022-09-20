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
exports.Customer = void 0;
const metadata_1 = require("55tec_integration_lib/model/metadata");
const metadata_decorators_1 = require("../../../util/metadata/metadata.decorators");
let Customer = class Customer {
};
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'nome', externalName: 'nome', required: true, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Nome" } }),
    __metadata("design:type", String)
], Customer.prototype, "nome", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'telefone', externalName: 'telefone', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Telefone" } }),
    __metadata("design:type", String)
], Customer.prototype, "telefone", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'email', externalName: 'email', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Email" } }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'empresa', externalName: 'empresa', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Empresa" } }),
    __metadata("design:type", String)
], Customer.prototype, "empresa", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'mensagem', externalName: 'mensagem', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Mensagem" } }),
    __metadata("design:type", String)
], Customer.prototype, "mensagem", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'cidade', externalName: 'cidade', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Cidade" } }),
    __metadata("design:type", String)
], Customer.prototype, "cidade", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'origem', externalName: 'origem', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "Origem" } }),
    __metadata("design:type", String)
], Customer.prototype, "origem", void 0);
__decorate([
    (0, metadata_decorators_1.prop)({ name: 'uf', externalName: 'uf', required: false, type: metadata_1.MetafieldType.TEXT, label: { [metadata_1.Lang.PT_BR]: "UF" } }),
    __metadata("design:type", String)
], Customer.prototype, "uf", void 0);
Customer = __decorate([
    (0, metadata_decorators_1.label)(metadata_1.Lang.PT_BR, 'Customer')
], Customer);
exports.Customer = Customer;
exports.default = Customer;
//# sourceMappingURL=index.js.map