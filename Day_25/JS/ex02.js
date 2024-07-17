Number.prototype.getCurrency = function(currentUnit){
   return this.toLocaleString('vi-VN').replaceAll('.', ',') + ' ' + currentUnit;
};
 
String.prototype.getCurrency= function(currentUnit){
    var string=this;
    var number= +string;
    if( isNaN(number)){
        return "Not a Number";
    }
    return number.toLocaleString('vi-VN').replaceAll('.', ',') + ' ' + currentUnit;
};

//Case 1
var price = 12000;
console.log(price.getCurrency('đ')) 

//Case 2
var price = "12000000";
console.log(price.getCurrency('đ')) 
