let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let about = document.querySelector(".about");
let resume = document.querySelector(".resume");
let project1 = document.querySelector(".project-1");
// let avatar = document.querySelector(".avatar");
let next = document.querySelector(".next");
// let name1 = document.querySelector(".name");
// let name2 = document.querySelector(".name1");


button1.addEventListener("click", function() {
    about.style.display = "block";
    resume.style.display = "none";
})

button2.addEventListener("click", function() {
    about.style.display = "none";
    resume.style.display = "block";
})

next.addEventListener("click", function() {
    document.querySelector(".avatar").src = "photo4.png"
})

next.addEventListener("dblclick", function() {
    document.querySelector(".avatar").src = "avatar.jpg"
})

next.addEventListener("mouseover", function() {
    document.querySelector(".avatar").src = "p1.png"
})

// name1.addEventListener("click", function() {
//     name1.style.display = "none";
// })