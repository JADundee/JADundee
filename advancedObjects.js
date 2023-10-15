//Evaluate these:
//#1
// Both false
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // a = 4
const object2 = object1; // a = 4
const object3 = object2; // a = 4
const object4 = { a: 5}; // a = 5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


class Animal {
    constructor(name, type, colour) {
        this.name = name;
        this.type = type;
        this.colour = colour;
    }
}

class Mamal extends Animal {
    constructor(name, type, colour) {
        super(name, type, colour)
    }
    sound() {
        console.log(`Moo ${this.name}, Moo ${this.type}, Moo ${this.colour}`)
    }
}

const cow = new Mamal('Betty', 'Dairy', 'brown');