// Add your Circle class here

class Circle {
    constructor(radius){
    this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return 2 * Math.PI * this.radius
      }

    get area(){
        return Math.PI * (this.radius ** 2)
    }

    set diameter(dia){
        this.radius = dia / 2
    }

    set circumference(cir){
        this.radius = cir / (2 * Math.PI)
    }
}