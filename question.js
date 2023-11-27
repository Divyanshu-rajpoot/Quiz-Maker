let idvalue = document.getElementsByTagName('h4')[1];
let optionA = document.getElementById('A');
let optionB = document.getElementById('B');
let optionC = document.getElementById('C');
let optionD = document.getElementById('D');
let correctoption = document.getElementById('correctopt')
let addQuestion = document.getElementById('addques');
let question = document.getElementById('ques');
let gentor = document.getElementById("generator")
let counter = document.getElementById("count")
var count = 2;

function selected(event){
    correctoption.value = event.target.value;
}


const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}                                            // this will genrate the unique id
const quizid = generateString(4);
idvalue.innerText = quizid;


addQuestion.addEventListener('click', async () => {
    await fetch("https://myquizserver.onrender.com/addQuestion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            quizId: `${quizid}`,
            question: `${question.value}`,
            opt1: `${optionA.value}`,
            opt2: `${optionB.value}`,
            opt3: `${optionC.value}`,
            opt4: `${optionD.value}`,
            correctOpt: `${correctoption.value}`,
        })
    })
    const erase = document.querySelectorAll('input');
    erase.forEach(input => {
        input.value = '';
    })
})
gentor.addEventListener("click", () => {
    location.href = "index.html"
})
addQuestion.addEventListener("click", () => {
    counter.innerText = `Q${count}`
    count++;
})
function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementsByTagName("h4")[1].textContent);
    alert(`please copy the unique id (${quizid}) to attempt the quiz`)
}
