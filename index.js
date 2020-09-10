class Circle {
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius * 2
    }
    
    get circumference() {
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set diameter(input) {
        this.radius = input / 2
    }

    set circumference(input) {
        this.radius = (input / Math.PI) / 2
    }

    set area(input) {
        this.radius = Math.sqrt(input) / 2
    }
}
