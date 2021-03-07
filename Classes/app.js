class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    get type() {
        return this._type;
    }

    set type(animalType) {
        if(animalType === 'carnivore' || animalType === 'herbivore' || animalType === 'omnivore') {
            this._type = animalType;
        }
        else {
            throw new Error('This is not a proper Animal!')
        }
    }

    eat(animal) {
        
        if (animal instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }
            else{
                if(this.size < animal.size * 2){
                    console.log(`The animal ${this.name} tried to eat ${animal.name} but it was too large.`);
                }
                else {
                    this.isEaten = true;
                    console.log(`The animal ${this.name} ate ${animal.name}`);
                }
            }
        }
        else {
            console.log(`The animal ${this.name} is eating  ${animal.name}.`);
        }
    }
}

let dog = new Animal("Rover", "herbivore", 12, 10);
let tiger = new Animal("Denver", "carnivore", 16, 80);
let bear = new Animal("Harley", "omnivore", 17, 120);

dog.eat(tiger);
tiger.eat(bear);
bear.eat(dog);