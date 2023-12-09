window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  const navigation = document.getElementById("navigation");
  const trekify = document.getElementById("header");
  const scrollTop = window.pageYOfsett || document.documentElement.scrollTop;

  if (scrollTop > 0) {
    header.classList.add("white-bg");
    navigation.classList.add("nav-js");
    trekify.classList.add("span-js");
  } else {
    header.classList.remove("white-bg");
    navigation.classList.remove("nav-js");
    trekify.classList.remove("span-js");
  }
});
