// Check if the visit count is already stored in localStorage
let visitCount = localStorage.getItem('visitCount');

if (!visitCount) {
  // If visit count is not stored, set it to 1
  visitCount = 1;
  localStorage.setItem('visitCount', visitCount);
} else {
  // If visit count is already stored, increment it by 1
  visitCount = parseInt(visitCount) + 1;
  localStorage.setItem('visitCount', visitCount);
}

// Display the visit count on the page
document.getElementById('visit-counter').innerHTML = `You are visitor number ${visitCount}.`;
