

<script>
// Retrieve the visit count from localStorage
var visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
  visitCount = 0;
}

// Increment the visit count for new visitors
if (!sessionStorage.getItem('hasVisited')) {
  visitCount++;
  sessionStorage.setItem('hasVisited', true);
  localStorage.setItem('visitCount', visitCount);
}

// Display the visit count on the page
document.getElementById('visit-count').textContent = 'Total visits: ' + visitCount;
</script>

