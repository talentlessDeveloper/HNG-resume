const container = document.querySelector(".container");
const unsplashUrl = 'https://source.unsplash.com/random/';
const btn = document.querySelector(".btn");



let row = 10;

btn.addEventListener("click", () => {
    container.innerHTML = "";
    row = randomRow();
    loadImages();
    console.log(row);
})

loadImages();




function loadImages() {

    for (let i = 0; i < row * 3; i++) {
        const img = document.createElement("img");
        img.src = `${unsplashUrl}${randomSize()}`;
        container.appendChild(img);
    }
}



function randomNum() {
    return Math.floor(Math.random() * 10) + 300;
}

function randomSize() {
    return `${randomNum()}x${randomNum()}`
}


function randomRow() {
    return Math.floor(Math.random() * 5) + 5;
}
