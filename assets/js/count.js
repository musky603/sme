let count = 0; // initial count number

setInterval(() => {
  count += 9; // increase count by 9
  document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;
}, 43200000); // run every 12 hrs (12 * 60*60 * 1000 = 1800000 milliseconds)

setInterval(() => {
  if (count % 9 === 0) { // check if count is a multiple of 9
    count += 9; // increase count by 9
    document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;
  }
}, 86400000); // run every 24 hours (24 * 60 * 60 * 1000 = 86400000 milliseconds)



