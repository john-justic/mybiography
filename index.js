// Get the navigation links and the main content section
const navLinks = document.querySelectorAll("nav a");
const mainContent = document.querySelector("main");

// Add event listeners to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the URL of the clicked link
    const url = link.getAttribute("href");

    // Fetch the content from the URL using AJAX
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        // Update the main content section with the fetched content
        mainContent.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching content: ", error);
      });

    // Add active class to the clicked link and remove it from the others
    navLinks.forEach((navLink) => {
      if (navLink === link) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });
  });
});
