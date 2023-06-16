export default function() {
   
    const buttonPressAudio = new Audio("./button-press.wav");
    const kitchenTimer = new Audio("kichen-timer.mp3");
    const bgAudio = new Audio("./audios_bg-audio.mp3");

    bgAudio.loop = true;
    
    function pressButton() {
        buttonPressAudio.play();
    }

    function timeEnd() {
        kitchenTimer.play();
    }

    return {
        pressButton,
        timeEnd,
        bgAudio
    }
}