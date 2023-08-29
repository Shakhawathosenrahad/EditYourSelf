onload = () => {
    document.documentElement.scrollTop = 0;
}

// NavBar

const nav = document.querySelector("nav")
const links = nav.querySelector(".links")
const nav_btn = nav.querySelectorAll(".fa-solid")

nav_btn.forEach((btn, i) => {
    btn.onclick = () => {
        if (i === 1) return links.classList.add("navigate");
        links.classList.remove("navigate");
    }
})

let isScrolling = 0;

addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let src = nav.firstElementChild.dataset.key;

    if(isScrolling <= scrollTop) {
        nav.firstElementChild.src = `${src}2.png`;
        nav.classList.add("scrolling");
    }
    else {
        nav.firstElementChild.src = `${src}1.png`;
        nav.classList.remove("scrolling");
    }

    isScrolling = scrollTop;
})


// scrolling animation for services_rows

const services_rows = document.getElementsByClassName("services_rows_img");

onscroll = () => {
    for(let i = 0; i < services_rows.length; i++) {
        if(i % 2 != 0) {
            let offsetTop = services_rows[i].offsetTop - 450;
            let scrollTop = document.documentElement.scrollTop;

            if(offsetTop < scrollTop) {
                services_rows[i].style.transform = `translateX(0) rotate(0)`;
                services_rows[i].style.opacity = 1;
                services_rows[i].previousElementSibling.style.transform = `translateX(0)`;
                services_rows[i].previousElementSibling.style.opacity = 1;
            }
            else {
                services_rows[i].style.transform = `translateX(400px) rotate(45deg)`;
                services_rows[i].style.opacity = 0;
                services_rows[i].previousElementSibling.style.transform = `translateX(-400px)`;
                services_rows[i].previousElementSibling.style.opacity = 0;
            }
        }

        else {
            let offsetTop = services_rows[i].offsetTop - 450;
            let scrollTop = document.documentElement.scrollTop;
            
            if(offsetTop < scrollTop) {
                services_rows[i].style.transform = `translateX(0) rotate(0)`;
                services_rows[i].style.opacity = 1;
                services_rows[i].nextElementSibling.style.transform = `translateX(0)`;
                services_rows[i].nextElementSibling.style.opacity = 1;
            }
            else {
                services_rows[i].style.transform = `translateX(-400px) rotate(-45deg)`;
                services_rows[i].style.opacity = 0;
                services_rows[i].nextElementSibling.style.transform = `translateX(400px)`;
                services_rows[i].nextElementSibling.style.opacity = 0;
            }
        }

    }
}


// about us page timeline animaiton

const aboutUs = document.querySelector(".aboutUs_column")

addEventListener("scroll", () => {
    if(!aboutUs) return;
    let offsetTop = aboutUs.offsetTop - 750;
    let scrollTop = document.documentElement.scrollTop;

    if(scrollTop > offsetTop) {
        aboutUs.classList.add("animating");
    }
    else {
        aboutUs.classList.remove("animating");
    }
})


// history_back button in careers > developers page

const history_back = document.querySelector("header.section .fa-arrow-left");

const timer = ms => {
    return new Promise(promise => setTimeout(promise, ms));
}

if(history_back)
    history_back.addEventListener("click", async () => {
        history_back.classList.add("focus");

        await timer(400)
        history_back.classList.remove("focus")

        await timer(100)
        history.back()
    })


// working on form

const upload = document.querySelector("form > div i");

if(upload) {
    upload.onclick = function() {
        this.nextElementSibling.click()
    }

    const filetype = ["pdf", "png", "doc"]

    upload.nextElementSibling.addEventListener("change", function() {
        let file = this.files[0];
        if(!file) return;
        upload.previousElementSibling.innerText = file.name;

        if(!filetype.includes(file.name.slice(-3))) {
            upload.previousElementSibling.innerText = "Please upload PDF, PNG or DOC!";
            upload.previousElementSibling.style.color = "red";
        }
    })
}