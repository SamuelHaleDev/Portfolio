$(document).ready(function() {
    // Load the navigation bar
    $("#nav-placeholder").load("nav.html", function() {
        // Function to set the active link
        function setActiveLink() {
            const currentPath = window.location.pathname;
            const link = currentPath.replace(/\\|\//g, '').replace(".html", "");

            // Remove selected attribute from others
            const selected = $('.selected');
            if (selected.length > 0) {
                selected.classList.remove('selected');
            }

            if (link != 'index') {
                // Grab anchor tag and apply selected class
                let query = 'a.' + link;
                const navLinks = document.querySelector(query);
                navLinks.classList.add('selected');
            }
        }

        // Call the function to set the active link
        setActiveLink();
    });
});