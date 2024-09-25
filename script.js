// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Select all elements with the class 'faq-question'
  const faqItems = document.querySelectorAll('.faq-question');

  // Iterate over each 'faq-question' element
  faqItems.forEach(item => {
    // Add a click event listener to each 'faq-question' element
    item.addEventListener('click', function() {
      // Select the next sibling element, which is the answer
      const answer = this.nextElementSibling;

      // Toggle the visibility of the answer
      if (answer.style.display === "block") {
        answer.style.display = "none"; // Collapse answer
      } else {
        answer.style.display = "block"; // Expand answer
      }
      
      // Optional: Add/remove 'active' class for styling
      this.classList.toggle("active");
    });
  });
});