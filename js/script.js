var typed = new Typed(".typing",{
    strings:[
        " ",
        "Full Stack Developer",
        "Web Designer",
        "Java Programmer",
        "Blockchain Enthusiast"
],
typeSpeed:100,
BackSpeed:500,
loop:true
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=> n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))