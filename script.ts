function toggleSkills(): void {
  const skillsSection = document.getElementById("skills-section");
  const toggleButton = document.getElementById("hide-show");

  if (skillsSection && toggleButton) {
    if (skillsSection.style.display === "none") {
      // Show the entire skills section if hidden
      skillsSection.style.display = "block";
      toggleButton.innerText = "Hide Skills";
    } else {
      // Hide the entire skills section if shown
      skillsSection.style.display = "none";
      toggleButton.innerText = "Show Skills";
    }
  }
}
