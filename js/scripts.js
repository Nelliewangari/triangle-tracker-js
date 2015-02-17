var triangle = function(sideOne, sideTwo, sideThree){

  var sides = [sideOne, sideTwo, sideThree]

  if(sideOne === '' || sideTwo === '' || sideThree === '') {
    alert("Please enter three side lengths");
  } else if (sides[0] >= (sides[1] + sides[2]) || sides[1] >= (sides[2] + sides[0]) || sides[2] >= (sides[0] + sides[1])) {
    alert("This is not a valid triangle");
  } else if (sides[0]===sides[1] && sides[1]===sides[2]) {
    return "equilateral";
  } else if (sides[0]===sides[1] || sides[0]===sides[2] || sides[2]===sides[1]) {
    return "isosceles";
  } else if (sides[0]!=sides[1] && sides[0]!=sides[2]) {
    return "scalene";
  } else return sides; {;
  }
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);
    var sides = [sideOne, sideTwo, sideThree];


    if (result === "equilateral") {

    $("ul#tri-results-equilateral").append("<li>" + sides + "</li>");
    } else if (result === "isosceles") {
    $("ul#tri-results-isosceles").append("<li>"+ sides + "</li>");
    } else if (result === "scalene") {
    $("ul#tri-results-scalene").append("<li>" + sides + "</li>");
    } else {
      alert("Don't be a square, Give me a triangle!")
    }


    $("#result").show();
    event.preventDefault();
  });
});
