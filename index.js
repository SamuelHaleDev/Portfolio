// Function to handle nav item selection
function selectNavItem(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    let removeSelected = document.querySelector(".selected");
    if (removeSelected) {
        removeSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

// Attach event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(navItem => {
        navItem.addEventListener('click', selectNavItem);
    });
});