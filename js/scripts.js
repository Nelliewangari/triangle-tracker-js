var triangle = function(sideOne, sideTwo, sideThree){

  if (isNaN(sideOne) || isNaN(sideTwo) || isNaN(sideThree)) {
    alert("all sides must be numerical");
  } else if (sideOne >= (sideTwo + sideThree) || sideTwo >= (sideThree + sideOne) || sideThree >= (sideOne + sideTwo)) {
    alert("This is not a valid triangle");
  } else if (sideOne===sideTwo && sideTwo===sideThree) {
    return "equilateral";
  } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
    return "isosceles";
  } else if (sideOne!=sideTwo && sideOne!=sideThree) {
    return "scalene";
  } else {
    return sides;
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

    sideOne = parseInt($("input#sideOne").val(""));
    sideTwo = parseInt($("input#sideTwo").val(""));
    sideThree = parseInt($("input#sideThree").val(""));

    $("#result").show();
    event.preventDefault();
  });
});
