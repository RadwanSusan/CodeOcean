const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hour");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const countdown = "1 Jan 2023";
function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}
function countdownApp() {
	const countdownDate = new Date(countdown);
	const currentDate = new Date();
	const totalSeconds = (countdownDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hour = Math.floor(totalSeconds / 3600) % 24;
	const mins = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;
	daysEl.innerHTML = formatTime(days);
	hoursEl.innerHTML = formatTime(hour);
	minsEl.innerHTML = formatTime(mins);
	secondsEl.innerHTML = formatTime(seconds);
}
countdownApp();
setInterval(countdownApp, 1000);