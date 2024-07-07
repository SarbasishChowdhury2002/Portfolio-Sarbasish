var typed = new Typed(".text", {
    strings: ["Programming" , "Web Development" , "Machine Learning", "Java Developer",],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


var toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.scrollY > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
