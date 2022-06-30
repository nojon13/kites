function scale1() {

    var audio = new AudioContext(),
        position = 0,
        song1 = "cccccccc";

    setInterval(play, 1000 / 4);

    function createOscillator(freq) {
        var attack = 15,
            decay = 250,
            gain = audio.createGain(),
            osc = audio.createOscillator();

        gain.connect(audio.destination);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(0.03, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc.frequency.value = freq;
        osc.type = "sine";
        osc.connect(gain);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(gain);
            gain.disconnect(audio.destination);
        }, decay)


        if (clicks1 > 0 && clicks1 % 4 === 0) {
            osc.stop(0);
        }

    }

    function play() {
            freq = bassLine();
            position += 1;
        if(position >= song1.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }

};

// CLICK COUNTER

var button1 = document.getElementById("shape1");
var clicks1 = 0

function click1() {
    clicks1++;
    console.log("Yellow " + clicks1);
}

function bassLine() {
    if (clicks1 === 0) {
        return 0;
    }

    if (clicks1 > 0 && clicks1 % 4 === 1) {
        return 130.813;
    }

    if (clicks1 > 0 && clicks1 % 4 === 2) {
        return 174.614;
    }

    if (clicks1 > 0 && clicks1 % 4 === 3) {
        return 130.813;
    }
}
