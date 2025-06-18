
//Inheritance example
var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("eagle1:", eagle1)
console.log("eagle1 has wings:", eagle1.hasWings)
console.log("eagle1 can fly:", eagle1.canFly)
console.log("eagle1 has feathers:", eagle1.hasFeathers)

var penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin can fly:", penguin.canFly)


//Inheritance with classes
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name,age,energy) //Need this so we can uses the superclasses properties
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}

function intern() {
    const newWorker = new Worker("Bob", 21, 110, 0, 10); //Use "new" instead of Object.create as we need to access the worker constructor.
    newWorker.goToWork();
    return newWorker;
}

function manager() {
    const newWorker = new Worker("Alice", 30, 120, 100, 30); //Use "new" instead of Object.create as we need to access the worker constructor.
    newWorker.doSomethingFun();
    return newWorker;
}
