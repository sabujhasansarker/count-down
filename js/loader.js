function loader(_success) {
  var obj = getElement(".preloader"),
    inner = getElement(".preloader_inner"),
    bodyContainer = getElement(".body-container");
  // obj.classList.add("show");
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      inner.textContent = w + "%";
      bodyContainer.classList.add("hidden");

      if (w === 100) {
        obj.classList.remove("show");
        bodyContainer.classList.remove("hidden");
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 20);
}

window.addEventListener("load", () => {
  loader();
});
