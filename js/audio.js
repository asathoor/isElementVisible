/**
 * fil: audio.js
 * purpose: play audio when the containing div is visible
 **/
window.addEventListener("scroll", function () { // detect scroll event

	let mySound = document.getElementById("myaudio"); // select audio id
	let lyd = document.getElementById("lyd");
	console.log("Is the #lyd visible? " + elFllVsbl(lyd)); // test

	// Below: start and stop audio 
	if (elFllVsbl(lyd)) { // if the #lyd div is visible then
		if (!(mySound.curentTime > 0)) {
			mySound.play(); // play audio
		}
	} else {
		mySound.pause();
		mySound.currentTime = 0; // rewind the sound
	}

	// audio
	let iSee = document.getElementById('iSee');
	let myVideo = document.getElementById('myVideo');


	console.log('Is the video #iSee visible? ' + elFllVsbl(iSee));
// video visible test
	if (elFllVsbl( iSee )) { // if the #lyd div is visible then
		if (!(myVideo.curentTime > 0)) {
			myVideo.play(); // play video
		}
	} else {
		myVideo.pause();
		myVideo.currentTime = 0; // rewind the video
	}

	// from her if ... play

}); // end eventlistener

// this function will check whether a tag is visible
function elFllVsbl(el) {
	return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*
NB: the audio / video tags will allways return true,
solution: place the tag in a div and test for the div in stead
*/
