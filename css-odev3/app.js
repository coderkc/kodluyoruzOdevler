const btn = document.querySelector("#btn");
const panel = document.querySelector(".apps_panel");

btn.addEventListener("click", () => {
  let cl = panel.classList;
  cl.contains("show") ? cl.remove("show") : cl.add("show");
});

window.onclick = function (event) {
  if (event.target !== btn) {
    panel.classList.remove("show");
  }
};

const close = document.querySelector(".close");
const inp = document.querySelector("#inp");

inp.addEventListener("keydown",()=>{

  let inputLength = inp.value.length;
  if(inputLength>0) {
    close.style.display = "block";
  }else{
    close.style.display = "none";
  }
})

close.addEventListener("click", () => {
  inp.value = "";
  close.style.display = "none";
});

