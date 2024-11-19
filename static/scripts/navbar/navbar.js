function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarLinks");
    const navbarToggle = document.querySelector(".navbar-toggle");

    navbarLinks.classList.toggle("active");
    navbarToggle.classList.toggle("open");

    // Toggle aria-expanded for accessibility
    const expanded = navbarToggle.getAttribute("aria-expanded") === "true";
    navbarToggle.setAttribute("aria-expanded", !expanded);
}