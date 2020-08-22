// Add your Circle class here

const pi = Math.PI

class Circle {
    constructor (radius) {
        this.radius = radius
    }



    get diameter() {
        return (this.radius * 2)
        
    }

    set diameter(d) {
        this.radius = (d/2)
    }

    get circumference() {
        return pi * this.diameter
    }

    set circumference(c) {
        this.radius = ((c/pi)/2)
    }
    get area() {
        return pi * this.radius**2
    }
}