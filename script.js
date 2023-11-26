let pointer = document.getElementById('circle')
let generatequiz = document.getElementById('generate')
generatequiz.addEventListener('click',()=>{
    console.log("clicked");
})
// document.addEventListener('mousemove',function(dets){
//     let xdir = dets.x
//     let ydir = dets.y                                // genrate a follower cursor on the page
//     console.log(xdir)
//     pointer.style.transform = `translate(${xdir+5}px,${ydir+5}px)`
// })


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



