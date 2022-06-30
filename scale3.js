function scale3() {

    var audio = new AudioContext(),
        position = 0,
        scale = {

            e: 329.628, //E4
            f: 349.228, //F4
            g: 391.995, //G4
            a: 440, // A4
            b: 466.164, //Bb4
            c: 523.251, //C5
            h: 783.991, //G5
            i: 1046.5 //C6
        }

    var song =  pickSong3();

    function pickSong3() {

        var songArray = [
            "c-------g-------b-------e-------c-------g-------b-------a-------",
            "f-------f-------f-------f-------g-------g-------b-------g-------",
            "h-------h-------i-------e-------h-------i-------h-------i-------",
            "a-------b-------c-------h-------i-------i-------i-------i-------"

        ]

        var songNumber = Math.floor(Math.random() * songArray.length);

        var songChoice = songArray[songNumber];

        return songChoice;
        }

    setInterval(play, 1000 / 4);


    function createOscillator(freq) {
        var attack = 200,
            decay = 4000,
            gain = audio.createGain(),
            osc = audio.createOscillator();

        gain.connect(audio.destination);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(0.02, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc.frequency.value = freq;
        osc.type = "triangle";
        osc.connect(gain);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(gain);
            gain.disconnect(audio.destination);
        }, decay);

        if (clicks3 === 0) {
            osc.stop(0);
        }

        if (clicks3 > 0 && clicks3 % 2 === 0) {
            osc.stop(0);
        }

        if (clicks3 > 1 && (clicks3 % 2) != 0) {
            song = pickSong3();
        }
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }

};

// CLICK COUNTER

var button3 = document.getElementById("shape3");
var clicks3 = 0;

function click3() {
    clicks3++;
    console.log("Red " + clicks3);
}
