const work = {
    daily: "5hrs",
    weekly: "32hrs",
    monthly: "103hrs",
    weekHours: ["7hrs", "36hrs", "128hrs"]
}
const play = {
    daily: "1hrs",
    weekly: "10hrs",
    monthly: "23hrs",
    weekHours: ["2hrs", "8hrs", "29hrs"]
}
const study = {
    daily: "0hrs",
    weekly: "4hrs",
    monthly: "13hrs",
    weekHours: ["1hrs", "7hrs", "19hrs"]
}
const exercise = {
    daily: "1hrs",
    weekly: "4hrs",
    monthly: "11hrs",
    weekHours: ["1hrs", "5hrs", "18hrs"]
}
const social = {
    daily: "1hrs",
    weekly: "5hrs",
    monthly: "21hrs",
    weekHours: ["3hrs", "10hrs", "23hrs"]
}
const selfCare = {
    daily: "0hrs",
    weekly: "2hrs",
    monthly: "7hrs",
    weekHours: ["1hrs", "2hrs", "11hrs"]
}
document.querySelector(".day").addEventListener("click", function(){
    const workTime = document.querySelector(".work-time");
    workTime.innerText = work.daily;
    document.querySelector(".work").innerText = work.weekHours[0];

    const playTime = document.querySelector(".play-time");
    playTime.innerText = play.daily;
    document.querySelector(".play").innerText = play.weekHours[0];

    const studyTime = document.querySelector(".study-time");
    studyTime.innerText = study.daily;
    document.querySelector(".study").innerText = study.weekHours[0];

    const exerciseTime = document.querySelector(".exercise-time");
    exerciseTime.innerText = exercise.daily;
    document.querySelector(".exercise").innerText = exercise.weekHours[0];

    const socialTime = document.querySelector(".social-time");
    socialTime.innerText = social.daily;
    document.querySelector(".social").innerText = social.weekHours[0];

    const selfCareTime = document.querySelector(".selfcare-time");
    selfCareTime.innerText = selfCare.daily;
    document.querySelector(".selfcare").innerText = selfCare.weekHours[0];
})
document.querySelector(".week").addEventListener("click", function(){
    const workTime = document.querySelector(".work-time");
    workTime.innerText = work.weekly;
    document.querySelector(".work").innerText = work.weekHours[1];

    const playTime = document.querySelector(".play-time");
    playTime.innerText = play.weekly;
    document.querySelector(".play").innerText = play.weekHours[1];

    const studyTime = document.querySelector(".study-time");
    studyTime.innerText = study.weekly;
    document.querySelector(".study").innerText = study.weekHours[1];

    const exerciseTime = document.querySelector(".exercise-time");
    exerciseTime.innerText = exercise.weekly;
    document.querySelector(".exercise").innerText = exercise.weekHours[1];

    const socialTime = document.querySelector(".social-time");
    socialTime.innerText = social.weekly;
    document.querySelector(".social").innerText = social.weekHours[1];

    const selfCareTime = document.querySelector(".selfcare-time");
    selfCareTime.innerText = selfCare.weekly;
    document.querySelector(".selfcare").innerText = selfCare.weekHours[1];
})
document.querySelector(".month").addEventListener("click", function(){
    const workTime = document.querySelector(".work-time");
    workTime.innerText = work.monthly;
    document.querySelector(".work").innerText = work.weekHours[2];

    const playTime = document.querySelector(".play-time");
    playTime.innerText = play.monthly;
    document.querySelector(".play").innerText = play.weekHours[2];

    const studyTime = document.querySelector(".study-time");
    studyTime.innerText = study.monthly;
    document.querySelector(".study").innerText = study.weekHours[2];

    const exerciseTime = document.querySelector(".exercise-time");
    exerciseTime.innerText = exercise.monthly;
    document.querySelector(".exercise").innerText = exercise.weekHours[2];

    const socialTime = document.querySelector(".social-time");
    socialTime.innerText = social.monthly;
    document.querySelector(".social").innerText = social.weekHours[2];

    const selfCareTime = document.querySelector(".selfcare-time");
    selfCareTime.innerText = selfCare.monthly;
    document.querySelector(".selfcare").innerText = selfCare.weekHours[2];
})

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".day").click();
    document.querySelector(".day").style.opacity = '1';
})
