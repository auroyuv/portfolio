// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide switcher when scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");

    }
})

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", "true")

        }
    })
}

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector('i').classList.toggle("fa-sun");
    dayNight.querySelector('i').classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("Load", () => {
    if (document.body.classList.contains("dark")) {
        document.querySelector('i').classList.add("fa-sun")
    } else {
        document.querySelector('i').classList.add("fa-moon")

    }
})
