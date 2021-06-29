const changebtn=document.getElementById("jsChange");
const span=document.querySelector("span");

function changeColor(){
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const color=document.body.style.backgroundColor;
    span.innerHTML=color;
}


changebtn.addEventListener("click",changeColor);