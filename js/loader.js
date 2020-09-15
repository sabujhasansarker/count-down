window.addEventListener("load", function () {
  setTimeout(() => {
    const preloader = document.querySelector(".loader");
    console.log(preloader);
    // const candyCrab = document.querySelector(".candy_crab");
    preloader.classList.add("loader-headin");
    // add(candyCrab, "candy-active");
  }, 1000);
});
