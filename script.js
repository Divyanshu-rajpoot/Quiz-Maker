let pointer = document.getElementById('circle')
let generator = document.getElementById("generate");
let attempted = document.getElementById("attempt");
attempted.addEventListener("click",()=>{
    location.href = "attempt2.html"
})
generator.addEventListener("click",()=>{
    location.href = "quizcreate.html"
})


gsap.from( "#text h1", {
    x:100,
    duration: 1,
    stagger:0.2,
    opacity:0
})
gsap.from( "#btn button", {
    y:50,
    duration: 1,
    stagger:0.2,
    opacity:0
})



