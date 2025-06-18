var age = 10;
if(age >= 65){
    console.log("You get your income from your pension");
}
else if(age < 65 && age >= 18){
    console.log("Each month you get a salary.");
}
else if( age < 18){
    console.log("You get allowance.");
}
else{
    console.log("The value of the age is not numerical.");
}

var day = "fartSunday";
switch(day){
    case "Monday":
        console.log("Do something 1");
        break;
    case "Tuesday":
        console.log("Do something 2");
        break;
    case "Wednesday":
        console.log("Do something 3");
        break;
    case "Thursday":
        console.log("Do something 4");
        break;
    case "Friday":
        console.log("Do something 5");
        break;
    case "Saturday":
        console.log("Do something 6");
        break;
    case "Sunday":
        console.log("Do something 7");
        break;
    default:
        console.log("There is no such day");
        break;
}

var num = 80;
if(num == 0){
    console.log("Zero")
}
else if(num > 0){ 
    console.log("Postive")
}
else if(num < 0){
    console.log("Negative")
}
else{
    console.log("invalid numnber")
}

var role = "admin";
switch(role){
    case "admin":
        console.log("manage site");
        break;
    case "editor":
        console.log("edit content");
        break;
    case "viewer":
        console.log("view content");
        break;
    default:
        console.log("unrecongized role");
}