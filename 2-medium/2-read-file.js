const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Enter a file name: ', (answer) => {
    console.log(answer)
    fs.readFile(answer, {encoding: 'utf-8'}, (error, data) => {
        if (error) {
            return console.error(error)
        } else {
            console.log(data.toUpperCase())
        }
    })
        rl.close();
}) 
