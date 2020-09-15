var themeSwitch = getElement("#toggle-checkbox");

themeSwitch.addEventListener("click", (e) => {
  if (themeSwitch.checked) {
    setProperty("--overlay", "#ffffff");
  } else {
    setProperty("--overlay", "#00000052");
  }
});
