// Timer1 - Simple Timer
// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const createAlarm = (time) => {

  const timeMs = time * 1000;

  setTimeout(()=>{
    // console.log(`Alarm after ${time} seconds`);
    process.stdout.write('\x07');
  },timeMs);
};

// Slice to remove first two arguments
// Map to convert strings to numbers
const args = process.argv.slice(2).map(time => Number(time));

// Filter to remove any NaN and negative values
const timersAr = args.filter((arg) => (!(isNaN(arg)) && arg > 0));

// Check if there's arguments
if (timersAr.length > 0) {

  // For each argument, create a timer
  timersAr.forEach((arg) => {
    createAlarm(arg);
  });
  
}


// Edge case considerations

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.