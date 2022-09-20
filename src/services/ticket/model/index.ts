
import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";


@label(Lang.PT_BR, 'Ticket')
export class Ticket {

    @prop({ name: 'contract_service_tag_id', externalName: 'contract_service_tag_id', required: false, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "Tag"} })
    contract_service_tag_id?: string;

    @prop({ name: 'client_id', externalName: 'client_id', required: true, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "Cliente"} })
    client_id!: string;

    @prop({name: 'description', externalName: 'description', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Descrição"}})
    description?: string;

}

export default Ticket;