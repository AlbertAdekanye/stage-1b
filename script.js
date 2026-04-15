const timeEl = document.getElementById("time");

/* Update time every second */
function updateTime() {
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);