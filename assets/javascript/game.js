// //VARIABLES
//
// var targetNumber = 53;
// var counter = 0;
// var numberOptions = [10, 5, 3, 7];
// for (var i = 0; i < numberOptions.length; i++) {
//
// var imageCrystal = $("<img>");
//
//
// var crystalValue = ($(this).attr("data-crystalvalue"));
// crystalValue = parseInt(crystalValue);
// // We then add the crystalValue to the user's "counter" which is a global variable.
// // Every click, from every crystal adds to the global counter.
// counter += crystalValue;
//
// // All of the same game win-lose logic applies. So the rest remains unchanged.
// alert("New score: " + counter);
//
// if (counter === targetNumber) {
//   alert("You win!");
// }
//
// else if (counter >= targetNumber) {
//   alert("You lose!!");
// }
//
// });
//
//
// //FUNCTIONS
//
// $("#number-to-guess").text(targetNumber);
//
//

function randomScore() {
    var randnum = Math.floor((Math.random() * 100) + 35);
    //8-Ball Icosahedron Answers
    document.getElementById("randomscore").innerHTML = answers[randnum].text;
  };

  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById("gamestart").addEventListener('click',function ()
      {
       randomScore;
       //validation code to see State field is mandatory.
      }  );
  });
