class Circle {
    constructor(radius) {this.radius = radius;}

    get diameter() {return this.radius * 2}
    get circumference() {return Math.PI * this.diameter}
    get area() {return Math.PI * (this.radius ** 2)}

    set diameter(v) {this.radius = v/2}
    set circumference(v) {this.radius = (v / Math.PI) / 2}
    set area(v) {this.radius = Math.sqrt(v / Math.PI)}
}