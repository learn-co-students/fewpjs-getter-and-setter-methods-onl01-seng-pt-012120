// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return Math.PI * (this.radius ** 2)
  }

  set diameter(x) {
    this.radius = x / 2
  }

  set circumference(x) {
    this.radius = 0.5 * (x / Math.PI)
  }
}