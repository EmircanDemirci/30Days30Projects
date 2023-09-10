const changeButton = document.getElementById("changecolor");
const colorh = document.getElementById("colorh1");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

eventListeners();

function eventListeners(){
    changeButton.addEventListener("click", ()=>{
        let hexCode = "#";
        for(let i = 0;i<6;i++){
            let f=Math.floor(Math.random() * hex.length);
            hexCode += hex[f];
        }
        colorh.innerHTML = hexCode;
        document.body.style.backgroundColor = hexCode;
    })
}