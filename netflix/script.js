const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");



closeBtn.addEventListener("click", () => {
    nav.forEach(navSlide => {
        navSlide.classList.remove("visible");
    })
})

openBtn.addEventListener("click", () => {
    nav.forEach(navSlide => {
        navSlide.classList.add("visible");
    })
})