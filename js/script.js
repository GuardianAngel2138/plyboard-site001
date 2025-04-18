// Load Header, Footer, Contact, and Map Partials
window.addEventListener("DOMContentLoaded", () => {
  // Function to load a partial and insert it into the specified element
  const loadPartial = (url, elementId) => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load ${url}: ${res.statusText}`);
        }
        return res.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        } else {
          console.warn(`Element with ID ${elementId} not found.`);
        }
      })
      .catch(error => console.error(error));
  };

  // Load each partial
  loadPartial("partials/header.html", "header-include");
  loadPartial("partials/footer.html", "footer-include");
  loadPartial("partials/contact.html", "contact-include");
  loadPartial("partials/map.html", "map-include");
});

// Hide loader once the page is fully loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  } else {
    console.warn("Loader element not found.");
  }
});

// Toggle Mobile Navigation
function toggleMobileNav() {
  const mobileNav = document.querySelector('.mobile-nav');
  if (mobileNav) {
    mobileNav.classList.toggle('active');
  } else {
    console.warn("Mobile navigation element not found.");
  }
}