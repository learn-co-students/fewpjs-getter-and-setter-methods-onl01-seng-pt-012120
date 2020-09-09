class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.diameter * Math.PI
    }

    get area(){
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(newDiam){
       this.radius = newDiam/2 
    }

    set circumference(newCircum){
        this.radius = (newCircum/Math.PI)/2
    }

}