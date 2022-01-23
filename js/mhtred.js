// Start Count Down fot Events
let countDownDate = new Date("dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date();
  let dateDiff = countDownDate - dateNow;
  let d = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let h = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = d < 10 ? `0${d}` : d;
  document.querySelector(".hours").innerHTML = h < 10 ? `0${h}` : h;
  document.querySelector(".minutes").innerHTML = m < 10 ? `0${m}` : m;
  document.querySelector(".secondes").innerHTML = s < 10 ? `0${s}` : s;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
// End Count Down fot Events
// Animate Section Our Skills Section:
let ourSkills = document.querySelector(".our-skills");
let skills = document.querySelectorAll(".progress span");

//Stats Section
let myStats = document.querySelector(".stats");
let stats = document.querySelectorAll(".box .number");
let started = false; //Function started ? No

window.onscroll = function () {
  //Our-Skills Section
  if (
    window.scrollY >= ourSkills.offsetTop - 200 &&
    window.scrollY <= ourSkills.offsetTop + 300
  ) {
    skills.forEach((skill) => (skill.style.width = skill.dataset.width));
  } else {
    skills.forEach((skill) => (skill.style.width = "0px"));
  }
  //Stats Section
  if (window.scrollY >= myStats.offsetTop - 200) {
    if (!started) {
      stats.forEach((stat) => startCount(stat));
      started = true;
    }
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
