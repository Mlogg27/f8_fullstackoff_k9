function numberReverse(number){
    if(number %1 !==0 || typeof number !== 'number'){
        return "False";
    }
    var numberString = number + "";
    var numberStringReverse= numberString.split('').reverse().join(''); 
    var numberReverse= +numberStringReverse;
    console.log (numberReverse);
}
numberReverse(12345);