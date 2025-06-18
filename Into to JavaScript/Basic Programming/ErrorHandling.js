//     throw new Error()
// }
// catch(err){
//     console.log(err)
// }


function addTwoNums(a,b){
    try{
        if(typeof(a) != 'number'){
            throw new TypeError("The first argument is not a number.")
        }
        else if(typeof(b) != 'number'){
            throw new TypeError("The second argument is not a number.")
        }
        else{
            console.log(a+b);
        }
    }
    catch(err){
        console.log("Error!", err);
    }
}
addTwoNums(5,"5");
console.log("It still works")




function letterFinder(word, match) {
    var condition1 = (typeof(word) == 'string' && word.length >= 2)
    var condition2 = (typeof(match) == 'string' && match.length == 1)
    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }
    else{
        console.log("Please pass correct arugments to the function.");
    }
    
}
letterFinder("cat", "c");