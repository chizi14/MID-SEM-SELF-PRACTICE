// Prompt the user to enter seconds
let input = prompt("Enter time in seconds:");

// Convert the input to a number
let totalSeconds = parseInt(input);

// Check if input is a valid number
if (isNaN(totalSeconds) || totalSeconds < 0) {
  alert("Please enter a valid non-negative number.");
} else {
  // Calculate minutes and remaining seconds
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  // Alert the result
  alert(`${totalSeconds} seconds = ${minutes} minute(s) and ${seconds} second(s).`);
}
