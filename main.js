const navLinks = document.querySelectorAll(".nav-link");
const displayLinks = document.querySelector(".display-links");
const mainTextWrapper = document.querySelector(".main-text-wrapper");

function handleDisplayLinks() {

    window.addEventListener("mouseover", (e) => {

        if (e.target.classList.contains("projects")) {

            displayLinks.innerHTML = `<h3 class="js-link">Projects</h3>`;
            mainTextWrapper.innerHTML = `<h2 class="main-text slide-text">check my works</h2>`;
        } else if (e.target.classList.contains("about")) {
            mainTextWrapper.innerHTML = `<h2 class="main-text slide-text">do you know who I am?</h2>`;

            displayLinks.innerHTML = `<h3 class="js-link">About</h3>`;

        } else if (e.target.classList.contains("contact")) {

            displayLinks.innerHTML = `<h3 class="js-link">Contact</h3>`;
            mainTextWrapper.innerHTML = `<h2 class="main-text slide-text">sent me a message</h2>`;
        }

        else {
            displayLinks.innerHTML = "";
            mainTextWrapper.innerHTML = `<h2 class="main-text">I'm stepping in to the coding space</h2>`;
        }

    })
}


handleDisplayLinks();


function onScroll() {

    const websiteImg1 = document.querySelector(".website-img-1");
    const websiteImg2 = document.querySelector(".website-img-2");
    const websiteImg3 = document.querySelector(".website-img-3");

    const introPosition = websiteImg1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    const introPosition2 = websiteImg2.getBoundingClientRect().top;
    const screenPosition2 = window.innerHeight / 2;

    const introPosition3 = websiteImg3.getBoundingClientRect().top;
    const screenPosition3 = window.innerHeight / 2;

    if (introPosition < screenPosition) {
        websiteImg1.classList.add("visibilty");
    }

    if (introPosition2 < screenPosition2) {
        websiteImg2.classList.add("visibilty");
    }

    if (introPosition3 < screenPosition3) {
        websiteImg3.classList.add("visibilty");
    }
}


const projectTextReport = document.querySelectorAll(".project-text-cover");
const projectText = document.querySelectorAll(".project-text");
const closeBtns = document.querySelectorAll(".close-text");
const projectsWrapper = document.querySelector(".projects-wrapper");
const projectColLeft = document.querySelector(".project-col-left");

projectsWrapper.addEventListener("click", openReport);

function openReport(e) {
    if (e.target !== e.currentTarget) {
        const btnIdOpen = e.target.id;
        console.log(btnIdOpen);
        
        if (btnIdOpen === "btn1") {
            projectTextReport[0].style.display = "block";
            projectText[0].style.display = "none";
            projectColLeft.style.marginBottom = "80px";
         
        } else if (btnIdOpen === "btn2") {
            projectTextReport[1].style.display = "block";
            projectText[1].style.display = "none";

        } else if (btnIdOpen === "btn3") {
            projectTextReport[2].style.display = "block";
            projectText[2].style.display = "none";
        }
    }
    e.stopPropagation();
}


projectsWrapper.addEventListener("click", closeReport);

function closeReport(e) {
    if (e.target !== e.currentTarget) {
        const btnIdClose = e.target.id;

        if (btnIdClose === "btn4") {
            projectTextReport[0].style.display = "none";
            projectText[0].style.display = "block";
            projectColLeft.style.marginBottom = 0;

        } else if (btnIdClose === "btn5") {
            projectTextReport[1].style.display = "none";
            projectText[1].style.display = "block";

        } else if (btnIdClose === "btn6") {
            projectTextReport[2].style.display = "none";
            projectText[2].style.display = "block";


        }
    }
    e.stopPropagation();
}

window.addEventListener("scroll", onScroll);
onScroll();