
import { MetafieldType, Lang } from "55tec_integration_lib/model/metadata";
import { label, prop } from "../../../util/metadata/metadata.decorators";


@label(Lang.PT_BR, 'Ticket')
export class Ticket {

    @prop({ name: 'assignment_id', externalName: 'assignment_id', required: false, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "ID de atribuição"} })
    assignment_id?: string;

    @prop({ name: 'title', externalName: 'title', required: true, type: MetafieldType.TEXT, label: {[Lang.PT_BR]: "Title"} })
    title!: string;

    @prop({name: 'protocol', externalName: 'protocol', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Protocolo"}})
    protocol?: string;

    @prop({name: 'status', externalName: 'status', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Status"}})
    status?: string;

    @prop({name: 'team', externalName: 'team', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Equipe"}})
    team?: string;


    @prop({name: 'sector_area', externalName: 'sector_area', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Setor"}})
    sector_area?: string;

    @prop({name: 'beginning_date', externalName: 'beginning_date', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Data de início"}})
    beginning_date?: string;

    @prop({name: 'final_date', externalName: 'final_date', required: true, type: MetafieldType.TEXT,label: {[Lang.PT_BR]: "Data final"}})
    final_date?: string;
}

export default Ticket;


export enum SolicitationEnum  {
    Solicitation="Solicitation",
    SolicitationCrm="SolicitationCrm",
    SolicitationSac="SolicitationSac"
  }