// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    // Select the navbar brand (logo)
    let navbarBrand = document.querySelector(".navbar-brand");

    // Add a click event to show an alert
    navbarBrand.addEventListener("click", function () {
        alert("Welcome to Shakti Mandir Gym!");
    });

    // Example: Change the background color of the navbar on scroll
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("bg-secondary");
        } else {
            navbar.classList.remove("bg-secondary");
        }
    });
});
