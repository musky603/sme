let count = 0; // initial count number
setInterval(() => {
  count += 9; // increase count by 3
  document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;
}, 1200000); // run every 30 minutes (30 * 60 * 1000 = 1800000 milliseconds)



