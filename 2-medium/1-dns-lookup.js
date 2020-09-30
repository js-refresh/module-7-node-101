const dns = require('dns');
const readline = require('readline');

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// use rl to ask question
rl.question('Domain Name: ', (answer) => {
  // use the answer to lookup hostname
  dns.lookup(answer, (err, address) => {
    // if there is an error
    if (err) {
      // log to the console and stop the callback
      console.log(err.message)
      return
    }
    // otherwise, log the ip address to the console
    console.log(address);
  })
  // close the readline interface so the app can quit
  rl.close();
})
