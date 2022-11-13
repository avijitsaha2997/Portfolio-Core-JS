const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

//show menu
menuBtn.addEventListener("click", () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})
//hide menu
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

const navItems = menu.querySelectorAll('li');

//remove active class function
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector("a");
        link.classList.remove("active");
    });
}

//add active class
navItems.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
        changeActiveItem();
        link.classList.add("active");
    })
})

//read more about section
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content");


readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle("show-content");
    if (readMoreContent.classList.contains("show-content")) {
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
})

//showing and hiding skills section
const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill => {
    skill.querySelector(".head").addEventListener("click", () => {
        skill.querySelector(".items").classList.toggle("show-items")
    })
})