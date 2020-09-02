// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    };
    get diameter() {
        return this.radius * 2;
    };
    set diameter(newValue) {
        if ((typeof newValue) === 'number' && newValue > 0) {
            this.radius = newValue/2 ;
        } else {
            throw new Error(`${newValue} is not a valid value for this measurement`);
        }
    };

    get circumference() {
        return Math.PI * this.diameter;
    };
    set circumference(newValue) {
        if ((typeof newValue) === 'number' && newValue > 0) {
            this.radius = newValue/(Math.PI * 2) ;
        } else {
            throw new Error(`${newValue} is not a valid value for this measurement`);
        }
    };

    get area() {
        return Math.PI * (this.radius)**2;
    };
    set area(newValue) {
        if ((typeof newValue) === 'number' && newValue > 0) {
            this.radius = Math.sqrt(newValue/Math.PI) ;
        } else {
            throw new Error(`${newValue} is not a valid value for this measurement`);
        }
    };
};