function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (const item of dairy) { //for of for arrays
        console.log(item);
    }
}
logDairy();

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const [key, value] of Object.entries(bird)) { //if we use for of we have to use this specific syntax to not get superclass properties
        console.log(`${key}: ${value}`);
    }
}
birdCan();

function animalCan() {
    for (const key in bird) { //This gets super class properties as well
        console.log(`${key}: ${bird[key]}`)
    }
}
animalCan();