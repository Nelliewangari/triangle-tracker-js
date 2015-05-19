describe('triangle', function(){
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(2, 2, 8000)).to.equal("These sides do not a triangle make.")
  });

  it("determines if 3 sides make an equilateral triangle", function() {
    expect(triangle(7,7,7)).to.equal("equilateral")
  });

  it("determines if 3 sides make an isosceles triangle", function() {
    expect(triangle(7,7,4)).to.equal("isosceles")
  });

  it("determines if 3 sides make a scalene triangle", function() {
    expect(triangle(2,3,4)).to.equal("scalene")
  });
});
