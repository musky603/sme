window.onload = () => {
  let count = 9; // initial count number

  setInterval(() => {
    count += 3; // increase count by 9
    document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;
  }, 43200000); // run every 30 minutes (30 * 60 * 1000 = 1800000 milliseconds)

  setInterval(() => {
    if (count % 9 === 0) { // check if count is a multiple of 9
      count += 3; // increase count by 9
      document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;
    }
  }, 86400000); // run every 24 hours (24 * 60 * 60 * 1000 = 86400000 milliseconds)
}



