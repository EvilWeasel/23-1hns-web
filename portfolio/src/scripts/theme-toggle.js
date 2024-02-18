const body = document.body;
const themeSwitch = document.querySelector(".theme-switch");
const moonIcon = document.querySelector('[data-icon="mdi:shield-moon"]');
const sunIcon = document.querySelector('[data-icon="mdi:shield-sun"]');

// Update the visibility of the theme icons
function updateThemeIcon() {
  if (moonIcon && sunIcon) {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
  }
}

// Add event listener to the theme switch
themeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateThemeIcon();
});
