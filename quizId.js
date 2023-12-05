let joined = document.getElementById("joining");
var tl = gsap.timeline();
gsap.from("#login",{
    opacity:0,
    duration:1,
    x:200
})

function joinQuiz() {
    if (!document.getElementById("quizid").value) {
        console.log("Please enter a valid quiz ID");
        alert("Please enter a quiz ID");
        return;
    }
    localStorage.clear()
    localStorage.setItem("quizId", `${document.getElementById("quizid").value}`)
    window.location.href = "./questions.html"
}