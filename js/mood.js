var themeSwitch = getElement("#toggle-checkbox");

const moodChanger = (mood) => {
  if (mood === "night") {
    setProperty("--overlay", "#00000052");
    setProperty("--countBg", "#24272adb");
    setProperty("--countBorder", " #1b1b1b87");
    setProperty("--day", "red");
    setProperty("--hours", "green");
    setProperty("--min", "aquamarine");
    setProperty("--sec", "whitesmoke");
    setProperty("--color", "white");
  } else {
    setProperty("--overlay", "#ffffff80");
    setProperty("--countBg", "whitesmoke");
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
