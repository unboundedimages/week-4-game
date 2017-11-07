//There are still things missing that I want to  accomplish, such as better styling, fixing the count down bug,etc



// <!--Crystal Collector Game-->
// <!--This game will contain instructions on how to play, output a random number,-->
// <!--collect and recod the win to loss ratio, display 4 jewel images, and ouput -->
// <!--a tally so the user will now how close they are to reaching the random number-->
// <!--I also want to figure out how to add a timerfor a personal bonus-->
// Each crystal will have a radom number assigned to it during the game.
//  When the game starts over a new random number will be assigned.
//  The computer will also select a new number at the start of each game.
// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.


var randNum;
var lost = 0;
var win = 0;
var prev = 0;


var startGame = function() {

    $(".crystals").empty();

    //Images array
    var images = [
        'assets/images/blueJ.png',
        'assets/images/greenJ.png',
        'assets/images/pinkJ.png',
        'assets/images/whiteJ.png',
    ];
    //This randNum formula is going to give the game a new number the user has to hit.
    randNum = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Your New Number: ' + randNum);
    //Foooorrrrrr loop to create something 4 times where the crystals will go
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "randomData": random
        });
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });
        // I used crystal.html(random); to see the the random number assigned to it
        // so that it was easier for me to do the math during testing.
        // crystal.html(random);

        $(".crystals").append(crystal);
    }

    $("#tally").html("TALLY: " + prev);
    $("#win").html("Wins: " + win);
    $("#lost").html("Losses: " + lost);
}

startGame();




$(document).on('click', ".crystal", function() {

var num = parseInt($(this).attr('randomData'));

prev += num;

$("#tally").html("TALLY: " + prev);
$("#win").html("Wins: " + win);
$("#lost").html("Losses: " + lost);


console.log(prev)

//log time oh oh oh oh oh oh ooooooh oh oooh.. get if else logic
if (prev > randNum) {
    lost++;
    $("#lost").html(lost);
    alert("YOU LOST!!! :(")

    prev = 0;

    startGame();
}
else if (prev === randNum) {
    win++;
    $("#win").html(win);
    prev = 0;
    startGame();
    alert("YOU'RE A WINNER!!!")

}
// Timer has bugs
// $(function() {
//     var time = 30;

//     function redirect() {
//         var id = setTimeout(redirect, 1000); // function will fired for every one second
//         $(".timer").html(time);
//         if (time == 0) {
//             // if time is zero redirect
//             clearTimeout(id);
//             alert("TimesUP")
//         }

//         time--; // the the time decrease, from 30 to 0
//     }

// remember to call function redirect
redirect();
});
});
