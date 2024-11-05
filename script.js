// Function to toggle the visibility of the skills section
function toggleSkills() {
    var skillsSection = document.getElementById("skills-section");
    var toggleButton = document.getElementById("hide-show");
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === "none") {
            // Show the entire skills section if hidden
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        }
        else {
            // Hide the entire skills section if shown
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    }
}
// Initially, we ensure the skills section is visible
document.addEventListener("DOMContentLoaded", function () {
    var skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
        skillsSection.style.display = "block"; // Ensure it's visible on load
    }
});
