// Spread Operator
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First Restraunt: ${first}`);
console.log(`Second Restraunt: ${second}`)
console.log(`Third Restraunt: ${third}`)
console.log(`Remaining Restraunts: ${remaining}`)


// Rest Operator
unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");
function unknownArgs(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i])
    } 
}

// Merge Array with Spread Operator
const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];
const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams]
console.log(favoriteTeams)


