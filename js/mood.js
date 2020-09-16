var themeSwitch = getElement("#toggle-checkbox");

const moodChanger = (mood) => {
  if (mood === "night") {
    getElement(".body-container").style.backgroundImage = `url(
      "../images/night.jpeg"
    )`;
    setProperty("--overlay", "#00000052");
    setProperty("--countBg", "#24272adb");
    setProperty("--countBorder", " #1b1b1b87");
    setProperty("--day", "#E18A07");
    setProperty("--hours", "#3A67F5");
    setProperty("--min", "#3D72A4");
    setProperty("--sec", "#CCCCCC");
    setProperty("--color", "white");
    setProperty("--bg", "black");
  } else {
    setProperty("--overlay", "#ffffff3b");
    setProperty("--countBg", "#f5f5f5e6");
    setProperty("--countBorder", " #1b1b1b87");
    setProperty("--day", "#336699");
    setProperty("--hours", "#3399FF");
    setProperty("--min", "#3366CC");
    setProperty("--sec", "#333333");
    setProperty("--color", "black");
    setProperty("--bg", "white");
    getElement(".body-container").style.backgroundImage = `url(
      "../images/day.jpeg"
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
