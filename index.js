class Circle {
  constructor(radius){
    this.radius = radius;
  }
  get diameter() {
    return this.radius * 2
  }

  set diameter(newDiameter) {
    this.radius = newDiameter/2;
  }

  get circumference() {
    return this.diameter * Math.PI
  }

  set circumference(newC) {
    this.diameter = newC/Math.PI;
  }

  get area() {
    return (this.radius * this.radius ) * Math.PI
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea/Math.PI)
  }
}
