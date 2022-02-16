//Timer2.js

// **********************************
// Expectations
// **********************************
// press b => beep right away
// The user can input any number from 1 to 9 => immediately output "setting timer for x seconds..."
// Which will beep after time has passed
// ctrl + c to exit the program => program should say "Thanks for using me, ciao!" before terminating

const createAlarm = (timeMs) => {
  console.log(`Setting timer for ${Math.floor(timeMs / 1000)} seconds...`);
  setTimeout(()=>{
    console.log("BEEP BEEP MOTHERFUCKER!");
    process.stdout.write('\x07');
  },timeMs);
};

let stdin = process.stdin;
let inputs = {
  "b": 1,
  "1": 1000,
  "2": 2000,
  "3": 3000,
  "4": 4000,
  "5": 5000,
  "6": 6000,
  "7": 7000,
  "8": 8000,
  "9": 9000
};

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

stdin.setEncoding('utf8');

// on any data into stdin
stdin.on('data', function(key) {

  // ctrl-c to be able to exit
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (inputs[key]) {
    if (inputs[key] === 1) {
      console.log("BEEP BEEP MOTHERFUCKER!");
      process.stdout.write('\x07');
    } else if (inputs[key] !== 1) {
      createAlarm(inputs[key]);
    }
  }
});