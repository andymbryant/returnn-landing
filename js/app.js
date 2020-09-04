function openLink(e) {
  console.log(e)
}

const party = new Date("October 10, 2020 05:00:00").getTime();
function getTime() {
  const today = new Date().getTime();

  // get the difference
  const diff = party - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  setTimeout(getTime, 1000)
}

document.getElementById("charity-logo").addEventListener('click', function (e) {
  e.preventDefault()
  var win = window.open('https://www.lafoodbank.org/', '_blank');
  win.focus();
});

document.getElementById("perform-btn").addEventListener('click', function (e) {
  e.preventDefault()
  var win = window.open('https://docs.google.com/forms/d/1-BDQdloeKyYJR-J1FTZVQJE-gyNjCZEOt0kIiOPAFOQ/viewform?edit_requested=true', '_blank');
  win.focus();
});

getTime()