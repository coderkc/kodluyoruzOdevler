let userName = prompt("Kullanıcı adınızı giriniz:");
let nameNode = document.querySelector("#myName");

let clockTxt = document.querySelector("#clock");
let hourHand = document.querySelector(".hand_hour");
let minuteHand = document.querySelector(".hand_minute");
let secondHand = document.querySelector(".hand_second");

let dayTxt = document.querySelector("#day");

userName ? (nameNode.innerHTML = userName) : (nameNode.innerHTML = "Anonim");

function showHour() {
  let d, h, m, s, clock;

  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  // clock = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
  // console.log(clock);

  h >= 12 ? (h = h - 12) : h;

  let degH = 90 + (360 / 12) * h;
  let degM = 90 + (360 / 60) * m;
  let degS = 90 + (360 / 60) * s;

  hourHand.style.transform = `rotate(${degH}deg)`;
  minuteHand.style.transform = `rotate(${degM}deg)`;
  secondHand.style.transform = `rotate(${degS}deg)`;
}

setInterval(() => {
  showHour();
}, 1000);

function showDay() {
  let d = new Date();

  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  let day = d.getDay();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  dayTxt.innerHTML += `${addZero(date)}.${addZero(month + 1)}.${year} - ${
    days[day]
  }`;
}

showDay();

// adding zero before single digit number
function addZero(n) {
  return n < 10 ? (n = "0" + n) : n;
}

// Circle text
const circleType = new CircleType(document.querySelector(".usernam"));

circleType.radius(60);
