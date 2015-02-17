var triangle = function(sideOne, sideTwo, sideThree){

  var sides = [sideOne, sideTwo, sideThree]

  if(sideOne === '' || sideTwo === '' || sideThree === '') {
    return "Please enter three side lengths";
  } else if (sides[0] >= (sides[1] + sides[2]) || sides[1] >= (sides[2] + sides[0]) || sides[2] >= (sides[0] + sides[1])) {
    return "This is not a valid triangle";
  } else if (sides[0]===sides[1] && sides[1]===sides[2]) {
    return "Equilateral";
  } else if (sides[0]===sides[1] || sides[0]===sides[2] || sides[2]===sides[1]) {
    return "Isosceles";
  } else if (sides[0]!=sides[1] && sides[0]!=sides[2]) {
    return "Scalene";
  } else return sides; {;
  }
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());

    var result = triangle(sideOne, sideTwo, sideThree);

    $(".type-of-triangle").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
