const child = require('child_process');

(async( ) => {
    const childs = child.fork('/Users/pedrojoaquimdacosta/in/integration-ovalle/dist/index.js');

    childs.on('message', (message) => {
        console.log('--- m essage', JSON.stringify(message));
    })

    childs.send({
        id: '45632',
        action: 'customer/find',
        body: {
            options: {
                subdomain:'https://erp-staging.agetelecom.com.br'
            },
            data: {
                "codigo": "08400223608",
            },
            credentials: [
                {type: 'token', value: ["4d0e415e-0bd0-11ea-a050-90b11c2d743a"]
            }
            ]
        },
        resources: [{
            type: 'string'
        }],
    })
})()