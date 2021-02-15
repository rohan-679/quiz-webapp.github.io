const quizDB = [
    {
        question: "Q1: Which of the following is the address operator?",
        a: "@",
        b: "#",
        c: "&",
        d: "%",
        ans: "ans3"
    },
    {
        question: "Q2: Which of the following features must be supported by any programming language to become a pure object-oriented programming language?",
        a: "Encapsulation",
        b: "Encapsulation",
        c: "Polymorphism",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question: "Q3: Which of the following is the original creator of the C++ language?",
        a: "Dennis Ritchie",
        b: "Ken Thompson",
        c: "Bjarne Stroustrup",
        d: "Brian Kernighan",
        ans: "ans3"
    },
    {
        question: "Q4: Which of the following statements is correct about the formal parameters in C++?",
        a: "Parameters with which functions are called",
        b: "Parameters which are used in the definition of the function",
        c: "Variables other than passed parameters in a function",
        d: "Variables that are never used in the function",
        ans: "ans1"
    },
    {
        question: "Q5: Which of the following refers to characteristics of an array?",
        a: "An array is a set of similar data items",
        b: "An array is a set of distinct data items",
        c: "An array can hold different types of datatypes",
        d: "None of the above",
        ans: "ans1"
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const answers = document.querySelectorAll('.answer')

const submit = document.querySelector('#submit')

let questionCount = 0;
let score=0;
const showScore = document.querySelector('#showScore');
const loadQuestion = () => {
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElm) => {
        if(curAnsElm.checked){
            answer = curAnsElm.id;
        }
    });
    return answer;
}
const deselectAll = ()=>{
    answers.forEach((curAnsElm)=> curAnsElm.checked = false );
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;  
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>Your Score ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Give Test Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});