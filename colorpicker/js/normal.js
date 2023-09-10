const changeButton = document.getElementById("changecolor");
const colorh = document.getElementById("colorh1");
const colors = ["red" , "blue" , "brown" , "green"];


eventListeners();

function eventListeners(){

    changeButton.addEventListener("click" , ()=>{
        let f=Math.floor(Math.random() * colors.length);
        colorh.innerHTML = colors[f];
        document.body.style.backgroundColor = colors[f];
    })

}