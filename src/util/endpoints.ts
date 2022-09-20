import { debug } from "console";

export enum Environment {
    PRODUCTION = 'production',
    SANDBOX = 'sandbox'
}

const URL = {
    [Environment.PRODUCTION]: 'https://erp-production',
    [Environment.SANDBOX]: 'https://erp-staging'
}



export default function endpoints (environment: Environment, patch:string):string {
    console.log
    let url;
    if (!environment || !Object.values(Environment).includes(environment)) url = URL[Environment.PRODUCTION];
    else url = URL[environment];
debug
    return `${url}/${patch}}`;
}
