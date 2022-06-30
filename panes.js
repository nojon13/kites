// RANDOM START SCREEN LOADER

function changeAll() {
    document.getElementById("shape1").style.clipPath = triangleRandomizer();
    document.getElementById("shape2").style.clipPath = triangleRandomizer();
    document.getElementById("shape3").style.clipPath = triangleRandomizer();
}

// SHAPE CHANGER

document.getElementById("shape1").addEventListener("click", changeShape1);
document.getElementById("shape2").addEventListener("click", changeShape2);
document.getElementById("shape3").addEventListener("click", changeShape3);


//DRY THIS UP, DUMMY ^^^^^^^^^ >>>>>>>>>>>>

            function changeShape1() {
                document.getElementById("shape1").style.clipPath = triangleRandomizer();
                document.getElementById("shape1").classList.toggle("reverse");
                click1();
            }

            function changeShape2() {
                document.getElementById("shape2").style.clipPath = triangleRandomizer();
                document.getElementById("shape2").classList.toggle("reverse");
                click2();
            }

            function changeShape3() {
                document.getElementById("shape3").style.clipPath = triangleRandomizer();
                document.getElementById("shape3").classList.toggle("reverse");
                click3();
            }

function triangleRandomizer() {

    function randomArray() {
        var arr = [];
        while (arr.length <6) {
        var randomNumber = (Math.floor(Math.random() * 100) + 1);
        arr.push(randomNumber);}
        return arr;
    }

    var a, b, c, d, e, f;
    [a,b,c,d,e,f] = randomArray();

    return "polygon(" + a + "% " + b + "%, " + c + "% " + d + "%, " + e + "% " + f + "%)"

}

// BACKGROUND COLOR CHANGER

setTimeout(changeBG, 1000 * 20);

function changeBG() {

    setInterval(changeBG, 1000 * 20);

    document.getElementById("container").style.backgroundColor = blueRandomizer();

    function blueRandomizer() {

        var R = Math.floor(Math.random() * 35) + 1;
        var G = Math.floor(Math.random() * 50) + 205;
        var B = Math.floor(Math.random() * 100) + 155;
        var A = Math.floor(Math.random() + 0.2);

    return "rgb(" + R + ", " + G + ", " + B + ", " + A + ")";
    }
}

document.addEventListener("keydown", function(event) {

    keyChange(event.key);

});



function keyChange(key) {

    switch (key) {
        case "y":
            changeShape1();
    }
    switch (key) {
        case "b":
            changeShape2();
    }
    switch (key) {
        case "r":
            changeShape3();
    }
}

// START BUTTON ACTIONS

function startEmUp() {
    scale1();
    scale2();
    scale3();
    document.getElementById("startbutton").style.display = "none";
    document.getElementById("triangle-container").style.visibility = "visible";
}
