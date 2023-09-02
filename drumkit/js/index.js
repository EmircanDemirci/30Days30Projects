

window.addEventListener("keydown", function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    audio.currentTime=0;
    audio.play();
    key.classList.add("playing");    
})

window.addEventListener("keyup" ,function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.pause();
    key.classList.remove("playing");    

})