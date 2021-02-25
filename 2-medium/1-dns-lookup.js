const readline = require('readline')
const dns = require('dns')

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Domain Name: ', (answer) => {
    console.log(answer)

    dns.lookup(answer, (error, address) => {
        if (error) {
            console.log(error)
        } else {
            console.log('IP Address: ' + address)
        }    
    })

    rl.close();
})
