for(var i = 1; i <= 10; i++){
    if( i ==1){
        console.log("Gold Medal")
    }
    else if( i ==2){
        console.log("Silver Medal")
    }
    else if( i ==3){
        console.log("Bronze Medal")
    }
    else{
        console.log(i);
    }
}

for(var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log("Gold Medal")
            break;
        case 2:
            console.log("Silver Medal")
            break;
        case 3:
            console.log("Bronze Medal")
            break;
        default:
            console.log(i);
    }
}