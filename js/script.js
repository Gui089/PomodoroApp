import  Controls  from "./controls.js";
import  Timer  from "./timer.js";
import Sound from "./sounds.js";
import { 
    buttonPlay, 
    buttonPause,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondDisplay
    
}  from "./elements.js";


const controls = Controls({
    buttonPause, 
    buttonPlay, 
    buttonSet, 
    buttonStop
});

const timer = Timer({
    minutesDisplay, 
    secondDisplay,
    resetControls: controls.reset
});

const sound = Sound();


buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.countDown();
    sound.pressButton();
});

buttonPause.addEventListener('click',function() {
    controls.pause();
    timer.hold();
    sound.pressButton();
});

buttonStop.addEventListener('click', function() {
    controls.reset();
    timer.reset();
    sound.pressButton();
});

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOn.classList.remove('hide');
    buttonSoundOff.classList.add('hide');
    sound.bgAudio.pause();
});

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.play();
});

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes();
     
    if(!newMinutes) {
        timer.reset();
        return;
    }


    timer.UpdateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
});