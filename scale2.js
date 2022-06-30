function scale2() {

    var audio = new AudioContext(),
        position = 0,
        scale = {
            c: 523.251, // C5
            d: 587.330, // D5
            e: 659.255, //E5
            f: 698.456, //F5
            g: 783.991, // G5
            a: 880, // A5
            b: 932.328 // Bb5
        }

    var song = pickSong2();

    function pickSong2() {

        var songArray = [
            "c---f---",
            "cc--cfgf",
            "gccccccc",
            "gggggggg",
            "abgbafbb",
            "bbcccccc"
        ]

        var songNumber = Math.floor(Math.random() * songArray.length);

        var songChoice = songArray[songNumber];

        return songChoice;
    }

    function pickVoice2() {

        var voiceArray = [
            "triangle",
            "sine",
            "sawtooth",
            "square"
        ]

        var voiceNumber = Math.floor(Math.random() * voiceArray.length);

        var voiceChoice = voiceArray[voiceNumber];

        return voiceChoice;
    }

    setInterval(play, 1000 / 4);


    function createOscillator(freq) {
        var attack = 10,
            decay = 1000,
            gain = audio.createGain(),
            osc = audio.createOscillator();

        gain.connect(audio.destination);
        gain.gain.setValueAtTime(0, audio.currentTime);
        gain.gain.linearRampToValueAtTime(0.015, audio.currentTime + attack / 1000);
        gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

        osc.frequency.value = freq;
        osc.type = pickVoice2();
        osc.connect(gain);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(gain);
            gain.disconnect(audio.destination);
        }, decay)

        if (clicks2 === 0) {
            osc.stop(0);
        }

        if (clicks2 > 0 && clicks2 % 2 === 0) {
            osc.stop(0);
        }

        if (clicks2 > 1 && (clicks2 % 2) != 0) {
            song = pickSong2();
            osc.type = pickVoice2();
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
}

// CLICK COUNTER

var button2 = document.getElementById("shape2");
var clicks2 = 0

function click2() {
    clicks2++;
    console.log("Blue " + clicks2);
}
