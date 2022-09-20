"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterToString = void 0;
function filterToString(filters) {
    let str = "";
    for (let f in filters) {
        const v = filters[f];
        if (!(v instanceof Array) && (typeof v !== "string") && (typeof v !== "number"))
            continue;
        if (str)
            str += " or ";
        str += `(${fieldToCondition(f, v)})`;
    }
    console.log("Filtro gerado: " + str);
    return str;
}
exports.filterToString = filterToString;
const movideskStringFields = [
    "userName",
    "accessProfile",
    "businessName",
    "corporateName",
    "businessBranch",
    "cpfCnpj",
    "role",
    "bossId",
    "bossName",
    "classification",
    "cultureId",
    "timeZoneId",
    "authenticationOn",
    "createdBy",
    "changedBy",
    "observations"
];
function fieldToCondition(field, value) {
    let parser = (f, v) => {
        if (typeof v === "string")
            v = `'${v}'`;
        return `${f} eq ${v}`;
    };
    if (field === "phone")
        parser = (_f, v) => `Contacts/any(c: contains(c/Contact,'${v}'))`;
    if (field === "email")
        parser = (_f, v) => `Emails/any(e: contains(e/Email,'${v}'))`;
    if (field === "teams")
        parser = (_f, v) => `Teams/any(t: contains(t,'${v}'))`;
    if (field === "isActive")
        parser = (_f, v) => {
            if (['true', 1, 'ativo'].includes(v))
                return `isActive eq true`;
            if (['false', 0, 'inativo'].includes(v))
                return `isActive eq false`;
            return '';
        };
    if (movideskStringFields.includes(field))
        parser = (f, v) => `contains(${f}, '${v}')`;
    // @ts-ignore
    if (value instanceof Array)
        return value.map((v) => parser(field, v)).join(" or ");
    return parser(field, value);
}
//# sourceMappingURL=odata.js.map