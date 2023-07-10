
Swal.fire('Please Enter Your Vote')

let poll = {
    question: "What is your favorite programming language?",
    answers: ["HTML5", "CSS3", "JavaScript ES6", "React"],
    pollCount: 20,
    answersWeight: [4, 4, 2, 10],
    selectedAnswer: -1
};

let pollDom = {
    question: document.querySelector(".poll .question"),
    answers: document.querySelector(".poll .answers")
};

pollDom.question.innerText = poll.question;
pollDom.answers.innerHTML = poll.answers.map(function (answer, i) {
    return (
        `
<div class="answer" onclick="markAnswer(${i})">
${answer}
<span class="percentage-bar"></span>
<span class="percentage-value"></span>
</div>
`
    );
}).join("");

function markAnswer(i) {
    poll.selectedAnswer = +i;
    try {
        document.querySelector(".poll .answers .answer .selected").classList.remove("selected");
    } catch (msg) { }
    document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");
    showResults();
}

function showResults() {
    let answers = document.querySelectorAll(".poll .answers .answer");

    for (let i = 0; i < answers.length; i++) {
        let percentage = 0;

        if (i == poll.selectedAnswer) {
            percentage = Math.round((poll.answersWeight[i] + 1) * 100 / (poll.pollCount + 1));
        } else {
            percentage = Math.round(poll.answersWeight[i] * 100 / (poll.pollCount + 1));
        }

        answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
        answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}



// let poll = {

//     question: "What is Your Favourite Programming Language?",

//     answers: [

//         "HTML5", "CSS3", "JSes6", "Server", "React"
//     ],

//     pollCount: 20,

//     answersWeight: [4, 4, 2, 10],

//     selectedAnswer: -1

// };

// let pollDom = {

//     question: document.querySelector(".poll .question"),
//     answers: document.querySelector(".poll .answers")
// };

// pollDom.question.innerText = poll.question;
// pollDom.answers.innerHTML = poll.answers.map(function (answer, i) {

//     return (
//         `
//         <div class = "answer" onclick="markAnswer("${i}")">
//   ${answer}
//   <span class = "percentageBar"></span>  
//   <span class = "percentageValue"></span>
//    </div>
//  `
//     );

// }).join("")

// function markAnswer(i) {

//     poll.selectedAnswer = +1;

//     try {

//         document.querySelector(".poll .answers .answer .selected").classList.remove("selected");

//     } catch (msg) { }

//     document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");

//     showResults();

// }

// function showResults() {

//     let answers = document.querySelectorAll(".poll .answers .answer");

//     for (let i = 0; i <answers.length; i++) {

//         let percentage = 0;

//         if (i == poll.selectedAnswer) {
         
//             percentage = Math.round(

//                 (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)

//             );

//         } else {
//             percentage = Math.round(
//                 (poll.answersWeight[i]) * 100 / (poll.pollCount+1)
        
//          );
        
//             }

//          answers[i].querySelector(".percentageBar").style.width = percentage + "%";   
//          answers[i].querySelector(".percentageValue").innerText = percentage + "%";   

//     }
// }

// let poll = {

//     question: "What is Your Favourite Programming Language?",

//     answers: [

//         "HTML5", "CSS3", " Javascript es6", "Server", "React"
//     ],

//     pollCount: 20,

//     answersWeight: [4, 4, 2, 10],//20

//     selectedAnswer: -1

// };

// let pollDom = {

//     question: document.querySelector(".poll .question"),
//     answers: document.querySelector(".poll .answers")

// };

// pollDom.question.innerText = poll.question;
// pollDom.answers.innerHTML = poll.answers.map(function (answer, i) {

//     return (
//         `
//  <div class = "answer" onclick="markAnswer("${i}")">
//  ${answer}
// <span class = "percentage-bar"></span>  
// <span class = "percentage-value"></span>
// </div>
// `
//     );

// }).join("")

// function markAnswer (i) {

//     poll.selectedAnswer = +i;

//     try {

//         document.querySelector(".poll .answers .answer .selected").classList.remove("selected");

//     } 
    
//     catch(msg){}

//     document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");

//     showResults();

// }

// function showResults() {

//     let answers = document.querySelectorAll(".poll .answers .answer");

//     for(let i=0; i <answers.length; i++) {

//         let percentage = 0;

//         if (i == poll.selectedAnswer) {

//             percentage = Math.round(

//                 (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)

//             );

//         } 
        
//         else {
//             percentage = Math.round(
//                 (poll.answersWeight[i]) * 100 / (poll.pollCount+1)

//             );

//         }

//         answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
//         answers[i].querySelector(".percentage-value").innerText = percentage + "%";

//     }
// }