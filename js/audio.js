/**
 * fil: audio.js
 * eksempel fra Bror Arnfast
 **/

 window.addEventListener("scroll", function(){
          
    var mySound = document.getElementById("myaudio"); // select audio
    var lyd = document.getElementById("lyd");
    console.log( "Er div #lyd synlig? " + elFllVsbl( lyd ) );
    
    if (elFllVsbl ( lyd )){ 
        if (!(mySound.curentTime > 0)){
            mySound.play(); // play audio
        }
    } else {
        mySound.pause();
        mySound.currentTime = 0; // rewind the sound
    }
 }
)

function elFllVsbl(el){
    return ( el.getBoundingClientRect().top>=0 &&  el.getBoundingClientRect().bottom<window.innerHeight);
}