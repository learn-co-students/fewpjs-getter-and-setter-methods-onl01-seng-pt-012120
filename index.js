class Circle {
  constructor(radius){
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }


  get diameter() {
    return 2 * this.radius;
  }

  set diameter(diameter) {
    this.radius = diameter / 2; 
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }
}