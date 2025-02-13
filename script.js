const day = document.querySelector(".day");
const week = document.querySelector(".week");
const month = document.querySelector(".month");
const workTime = document.querySelector(".work-time");
const secWorkTime = document.querySelector(".work");
const playTime = document.querySelector(".play-time");
const secPlayTime = document.querySelector(".play");
const studyTime = document.querySelector(".study-time");
const secStudyTime = document.querySelector(".study");
const exerciseTime = document.querySelector(".exercise-time");
const secExerciseTime = document.querySelector(".exercise");
const socialTime = document.querySelector(".social-time");
const secSocialTime = document.querySelector(".social");
const selfCareTime = document.querySelector(".selfcare-time");
const secSelfCareTime = document.querySelector(".selfcare");

function daily(){

    workTime.innerText = "5hrs";
    secWorkTime.innerText = "7hrs";
    
}

day.addEventListener("click", daily);

function weekly(){
    workTime.innerText = "32hrs";
    secWorkTime.innerText = "36hrs";

}

week.addEventListener("click", weekly);

function monthly(){
    workTime.innerText = "103hrs";
    secWorkTime.innerText = "128hrs";

}

month.addEventListener("click", monthly);