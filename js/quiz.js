window.onload = function(){
  show(0);
}
let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];

function submitform(e){
    e.preventDefault();
    let n=document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name",n);
    location.href = "quizpage.html";
}
let point=0;
let ques_count=0;
function next(){
    
    let user_ans=document.querySelector("li.option.active").innerHTML;
    if(user_ans==questions[ques_count].answer){
        point+=10;
        sessionStorage.setItem("points",point);
    }
    if(ques_count==questions.length-1){
      sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
      clearInterval(mytime);
      location.href="end.html";
      return;
    }
    ques_count++;
    show(ques_count);
}

function show(count){
    let question = document.getElementById("questions");
    question.innerHTML = `<h2>Q${ques_count+1}. ${questions[count].question}<\h2>
    <ul class="option_grp">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
    </ul>
    `;
    toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++){
        option[i].onclick = function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}