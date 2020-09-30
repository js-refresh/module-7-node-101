const fs = require('fs');
const readline = require('readline');

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// use rl to ask question
rl.question('File Name: ', (answer) => {
  // read file synchronously and store in variable
  // const data = fs.readFileSync(answer, 'utf8')
  // console.log(data);

  // read file asynchronously and run callback once open
  fs.readFile(answer, 'utf8', (err, data) => {
    // if there's an error, log it and stop
    if (err) {
      return console.log(err.message);
    }
    // otherwise, log data to console
    console.log(data);
  })

  // close the readline interface so the app can quit
  rl.close();
})
