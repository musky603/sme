// Read the count value from cookie or set to 9 if not found
let count = parseInt(getCookie("count")) || 9;

setInterval(() => {
  count += 3; // increase count by 9
  document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;

  // Set the updated count value as a cookie
  setCookie("count", count, 365);
}, 43200000); // run every 30 minutes (30 * 60 * 1000 = 1800000 milliseconds)

setInterval(() => {
  if (count % 9 === 0) { // check if count is a multiple of 9
    count += 3; // increase count by 9
    document.getElementById("visit-count").innerHTML = `Total visits: ${count}`;

    // Set the updated count value as a cookie
    setCookie("count", count, 365);
  }
}, 86400000); // run every 24 hours (24 * 60 * 60 * 1000 = 86400000 milliseconds)

// Function to get a cookie value by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

// Function to set a cookie value
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}




