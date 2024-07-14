var numbers= ['10', '2', '5', '11'];

var numberMax= numbers[0];
var position;

if (numbers === []){
    consosle.log("Mảng chưa được nhập dữ liệu")
}

for( var i=0; i<=numbers.length; i++){
    var number= +numbers[i];
    if (number % 1 !== 0){
        console.log("Đây không phải số nguyên");
    }
}