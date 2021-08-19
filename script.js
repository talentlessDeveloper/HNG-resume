const nav = document.querySelector("nav");

window.addEventListener("scroll", fixedNav);

function fixedNav() {
  if (window.scrollY > nav.offsetHeight + 40) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}

console.log("Kareem Opeyemi");
