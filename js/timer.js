import Sounds from "./sounds.js";

export default function Timer({
    minutesDisplay, 
    secondDisplay, 
    resetControls
   }) {

   let timerTimeout;
   let minutes = Number(minutesDisplay.textContent);

 function UpdateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds == undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondDisplay.textContent = String(seconds).padStart(2, "0");
 }

 function reset() {
    UpdateDisplay(minutes, 0);
    clearTimeout(timerTimeout);
 }

 function countDown() {
    timerTimeout = setTimeout(function(){
        let seconds = Number(secondDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0;
        
        UpdateDisplay(minutes, 0);

          if(isFinished) {
            resetControls();
            UpdateDisplay();
            Sounds().timeEnd();
            return;
          } 

        if( seconds <= 0) {
            seconds = 60;

            --minutes;
        }
  
        UpdateDisplay(minutes, String(seconds -1));

        countDown();
    }, 1000)
 }

 function updateMinutes(newMinutes) {
   minutes = newMinutes;
 }

 function hold() {
   clearTimeout(timerTimeout);
 }
 
 return {
    countDown,
    reset,
    UpdateDisplay,
    updateMinutes,
    hold
 }

}