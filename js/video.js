var video;
var volume;
var slider;
var mute;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
	volume = document.querySelector("#volume");
	volume.innerHTML = video.volume * 100 + "%";
}

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= video.playbackRate * .2
 	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate += video.playbackRate * .25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= 596.45833){
		video.currentTime = 0;
		video.pause()
		video.playbackRate = 1;
		console.log("Current location is "+ video.currentTime);
	}
	else{
		console.log("Current location is "+ video.currentTime);
	}
} 

function mute() { 
	let mute = document.querySelector("#mute") 
  	if (video.muted == true){
		video.muted = false;
		mute.innerHTML = "Muted"
		console.log("Unmuted");
	  }
  	else{
		video.muted = true;
		mute.innerHTML = "Unmuted"
		console.log("Muted");
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider")
	video.volume = slider.value/100
	volume.innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume * 100 + "%");
}
       

function gray() { 
	video.style.filter ="grayscale(100%)";
	console.log("In grayscale")
}

function color() {
	video.style.filter ="grayscale(0%)";
	console.log("In color") 
}
