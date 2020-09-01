// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return 2 * this.radius;
    }
    get circumference() {
       return this.diameter * Math.PI;
    }
    get area(){
        return (this.radius**2)* Math.PI;
    }
    set diameter(newDia){
        this.radius = newDia/2
    }
    set circumference(newCirc){
        this.radius = (newCirc/Math.PI)/2
    }
}