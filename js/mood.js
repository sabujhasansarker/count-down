var themeSwitch = getElement("#toggle-checkbox");

const moodChanger = (mood) => {
  if (mood === "night") {
    getElement(".body-container").style.backgroundImage = `url(
      "https://bit.ly/32sX6eB"
    )`;
    setProperty("--overlay", "#00000052");
    setProperty("--countBg", "#24272adb");
    setProperty("--countBorder", " #1b1b1b87");
    setProperty("--day", "red");
    setProperty("--hours", "green");
    setProperty("--min", "aquamarine");
    setProperty("--sec", "whitesmoke");
    setProperty("--color", "white");
    setProperty("--bg", "white");
  } else {
    setProperty("--overlay", "#ffffff6b");
    setProperty("--countBg", "#f5f5f580");
    setProperty("--countBorder", " #1b1b1b87");
    setProperty("--day", "red");
    setProperty("--hours", "green");
    setProperty("--min", "aquamarine");
    setProperty("--sec", "whitesmoke");
    setProperty("--color", "black");
    setProperty("--bg", "white");
    getElement(".body-container").style.backgroundImage = `url(
      "https://bit.ly/35Bipg9"
    )`;
  }
};

const setMood = (mood) => {
  const moodData = localStorage.getItem("count-down-mood");
  if (!moodData) {
    localStorage.setItem("count-down-mood", "day");
    return "day";
  } else {
    if (mood) {
      localStorage.setItem("count-down-mood", mood);
      return mood;
    } else return moodData;
  }
};

moodChanger(setMood());
mood = setMood();

mood === "night" ? (themeSwitch.checked = true) : (themeSwitch.checked = false);

themeSwitch.addEventListener("click", () => {
  if (themeSwitch.checked) {
    setMood("night");
    moodChanger("night");
  } else {
    setMood("day");
    moodChanger("day");
  }
});
