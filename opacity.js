document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll(".experience-list li");

    listItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            listItems.forEach(sibling => {
                if (sibling !== item && sibling.classList.contains("experience-item") && !sibling.classList.contains("work")) {
                    sibling.style.opacity = "0.5";
                    sibling.style.transition = "opacity 100ms ease-in-out";
                }
            });
        });

        item.addEventListener("mouseout", () => {
            listItems.forEach(sibling => {
                sibling.style.opacity = "1";
            });
        });
    });
});