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

  //  clock = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;

  let degH = 90 + (360 / 24) * h;
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

function addZero(p) {
  return p < 10 ? (p = "0" + p) : p;
}

// Circle text
const circleType = new CircleType(document.querySelector(".usernam"));

circleType.radius(60);
