const buttons = document.querySelectorAll(".btn");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter");
let number = 0;

buttons.forEach(i=>{
    i.addEventListener("click", ()=>{
        if(i.id == "increase"){
            number++;
        }
        else if(i.id == "decrease"){
            number--;
        }
        else{
            number = 0;
        }
        if(number < 0){
            counter.style.color = "red";
        }
        if(number>0){
            counter.style.color = "green";
        }
        if(number === 0){
            counter.style.color = "black";
        }
        counter.textContent = number;
    })
    
})
