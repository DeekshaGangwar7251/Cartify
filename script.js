document.querySelector(".shop-btn").addEventListener("click", function() {
  alert("Redirecting to shop page...");
});

// Category card click functionality
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.category-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove active class from all cards
      cards.forEach(c => c.classList.remove('active-category'));

      // Add active class to clicked one
      card.classList.add('active-category');

      // Get category name from data attribute
      const category = card.getAttribute('data-category');

      // Show an alert or use console.log for testing
      alert(`You selected: ${category}`);
    });
  });
});





