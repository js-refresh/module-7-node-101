const fs = require('fs');
const readline = require('readline');

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// use rl to ask question
rl.question('Input file: ', (input) => {
  // read file synchronously and store in variable
  // const data = fs.readFileSync(answer, 'utf8')
  // console.log(data);

  // use rl to ask for the output file
  rl.question('Output file: ', (output) => {
    // read file asynchronously and run callback once open
    fs.readFile(input, 'utf8', (readErr, data) => {
      // if there's an error, log it and stop
      if (readErr) {
        // close the rl and log the error to console
        rl.close();
        return console.log(readErr.message);
      }

      // convert data to uppercase
      const uppercaseData = data.toUpperCase();

      // otherwise, log data to console
      fs.writeFile(output, uppercaseData, (writeErr) => {
        // if there's an error, log it and stop
        if (writeErr) {
          // close the rl and log the error to console
          rl.close();
          return console.log(writeErr.message)
        }

        // show the success message
        console.log(`Wrote to file ${output}`)

        // close the readline interface so the app can quit
        rl.close();
      })
    })
  })
})
