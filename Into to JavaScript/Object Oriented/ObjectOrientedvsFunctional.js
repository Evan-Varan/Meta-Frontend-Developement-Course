/* Example: Functional Programming vs Object Oriented */

//Functional
var shoes = 100;
var stateTax = 1.2;
function totalPrice(shoes,tax){
    return shoes * tax;
}

//OOP
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total Price:', calculation);
    }
}
purchase2.totalPrice();