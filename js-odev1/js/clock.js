// let userName = prompt("Kullanıcı adınızı giriniz:");
let nameNode = document.querySelector("#myName");

let d = new Date();

(userName="Anonim") ?  nameNode.innerHTML = userName :
nameNode.innerHTML =  "Anonim";



function showTime(){
    console.log(d);
}

showTime();