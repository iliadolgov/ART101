
// A says
let messagesA = ["How are u doing", "Sorry to hear that", "What color would u like  it to be", "So pick one",];
let counterA = 0;
// B says
let messagesB = ["Terrible", "Color of the background sucks", "Not this one",];
let counterB = 0;



// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == 3) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }
    else if ( counterA == counterB ) {
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});


// make the color buttons work

$("#answer-green").click(function () {

    $("body").css( "background-color", "green" );
    $("#chat").append("<p>finn: how did u do that</p>");
    $("#answers").css("display", "none");

});

$("#answer-pink").click(function () {

    $("body").css( "background-color", "pink" );
    $("#chat").append("<p>finn: still do not like it</p>");
    $("#answers").css("display", "none");
    


});