let idvalue = document.getElementsByTagName('h4')[0];
let optionA = document.getElementById('A');
let optionB = document.getElementById('B');
let optionC = document.getElementById('C');
let optionD = document.getElementById('D');
let correctoption = document.getElementById('correct')
let addQuestion = document.getElementById('addques');
let question = document.getElementById('ques');

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
})
function generateid() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    const quizid = generateString(5);
    idvalue.innerText = quizid;
}
generateid();


