const accordions = document.querySelectorAll(".accordion");
const imgSources = ["./assets/images/icon-minus.svg", "./assets/images/icon-plus.svg"]

let currentIndex = 0;

accordions.forEach(accordion => {
    const icon = accordion.querySelector(".icon");
    const answer = accordion.querySelector(".answer");
    accordion.addEventListener("click" , () => {
        answer.classList.toggle("hidden");
        icon.src = imgSources[currentIndex];
        currentIndex = (currentIndex + 1) % imgSources.length;
    })
})
