let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
let digitalClock = document.getElementById("DigitalClock");


function setAnalogClock(){
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

//degree
let hourDeg = h * 30 + m * 0.5;
let minuteDeg = m * 6 + s * 0.1;
let secondDeg = s * 6;

hours.style.transform = `rotateZ(${hourDeg}deg)`;
minutes.style.transform = `rotateZ(${minuteDeg}deg)`;
seconds.style.transform = `rotateZ(${secondDeg}deg)`;

digitalClock.innerHTML = `${h} : ${m} :${s} ${h>12 ? "PM" : "AM"}`
}

setAnalogClock();
setInterval(setAnalogClock, 1000);