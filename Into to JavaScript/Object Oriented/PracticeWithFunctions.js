function letterFinder(word,match){
    for(var i = 0; i < word.length;i++){
        if(word[i] == match){
            console.log("Found the", match, "at", i)
        }else{
            console.log("---No Match found at", i)
        }
    }
}

letterFinder("test","t");

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}
assistantManager.nextAchievement = "open a new store";
console.log(assistantManager);

var clothes = []
clothes.push("pant")
clothes.push("hat")
clothes.push("shirt")
clothes.push("sock")
clothes.push("shoe")
clothes.pop()
clothes.push("short")
console.log(clothes[2]);

var favCar = []
favCar.color = "maroon"
favCar.convertible = true
console.log(favCar)
