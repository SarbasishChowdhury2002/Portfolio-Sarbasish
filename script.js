var typed = new Typed(".text", {
    strings: ["Coding and DSA" , "Core Java + SpringBoot + MySQL" , "Cryptography", "Machine Learning"],
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
