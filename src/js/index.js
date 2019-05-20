// DONOT change here
import { setDigit } from "../plugins/render";

// DONOT change here
const WeAreDevelopersCongressDate = new Date(2019, 5, 6, 9, 0);
const deadLineTimeInMilliSeconds = WeAreDevelopersCongressDate.getTime();
updateTime.bind(window);
updateTime();
setInterval(updateTime, 1000);

// DONOT CHANGE this function.
function pad(n, z) {
  z = z || 2;
  return ("00" + n).slice(-z);
}

function updateTime() {
  let today = new Date(),
    ms = 0,
    days = "00",
    hours = "00",
    mins = "00",
    secs = "00";

  // YOUR CODE HERE

  // DONOT CHANGE THIS LINE
  // It is needed to render the time to HTML.
  setDigit(days + hours + mins + secs);
}
