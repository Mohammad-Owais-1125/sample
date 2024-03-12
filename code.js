// Set your target date here (adjust month, day, hour, minute, and second as needed)
const targetDate = new Date("2024-03-20T10:00:00");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function getTimeDifference() {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  // Check if the timer has expired
  if (difference <= 0) {
      // Hide the timer container and display a message (optional)
      document.querySelector('.timer-container').style.display = 'none';
      // document.getElementById('expired').style.display = 'block'; // Uncomment to display an expired message
      return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Format the time values with leading zeros
  daysElement.textContent = days.toString().padStart(2, "0");
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

// Update the timer every second
setInterval(getTimeDifference, 1000);
