
import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";


@label(Lang.PT_BR, 'Customer')
export class Customer {

    @prop({ name: 'nome', externalName: 'nome', required: true, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "Nome"} })
    nome?: string;

    @prop({ name: 'telefone', externalName: 'telefone', required: false, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "Telefone"} })
    telefone!: string;

    @prop({name: 'email', externalName: 'email', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Email"}})
    email?: string;

    @prop({name: 'empresa', externalName: 'empresa', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Empresa"}})
    empresa?: string;

    @prop({name: 'mensagem', externalName: 'mensagem', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Mensagem"}})
    mensagem?: string;

    @prop({name: 'cidade', externalName: 'cidade', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Cidade"}})
    cidade?: string;

    @prop({name: 'origem', externalName: 'origem', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Origem"}})
    origem?: string;

    @prop({name: 'uf', externalName: 'uf', required: false, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "UF"}})
    uf?: string;
}

export default Customer;