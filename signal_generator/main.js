// Creating a Play Button
var btn = document.querySelector("Button");
btn.addEventListener("click", function(){
	ctx.resume();
})


var ctx = new(window.AudioContext || window.webkitAudioContext)();
var audioOutput = ctx.destination;
var osc = ctx.createOscillator();

//Set the frequency
osc.frequency.value = 1000;




//Creating a Gain Node
var gainNode = ctx.createGain();
// Here we can change the gain value we want, this will be the volume of the rendering sound.
gainNode.gain.value = 0.1;
osc.connect(gainNode);
gainNode.connect(audioOutput);
console.log(gainNode);

//Set the type of the osc
// osc.type = "sawtooth";	
osc.type = "square";



//Add a filter
var filt = ctx.createBiquadFilter();
osc.connect(filt);
filt.connect(gainNode);
// Choose the filter type
filt.type = "bandpass"

// Set the filter frequency
filt.frequency.value = 200;



// These are the functions that play and stop the audio playing.
osc.connect(audioOutput);
osc.start();
osc.stop(2);
// if we want to play just a few seconds, we can just us osc.stop(2)
// the 2 means two seconds





function touchStarted() {
  getAudioContext().resume();
}
