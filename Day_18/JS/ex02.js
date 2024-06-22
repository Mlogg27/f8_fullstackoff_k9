var electricityNumber=105;
var priceRank1= 1678;
var priceRank2= 1734;
var priceRank3= 2014;
var priceRank4= 2536;
var priceRank5= 2834;
var priceRank6= 2927;
var total=0;
if (electricityNumber<=0|| electricityNumber%1 !== 0){
    console.log(`Không Hợp Lệ do số điện phải nguyên dương`);
} else{
    if(electricityNumber<=50){
        total += electricityNumber*priceRank1;
    } else if (electricityNumber<=100){
        total += 50*priceRank1 + (electricityNumber-50)*priceRank2;
    } else if(electricityNumber<=200){
        total +=50*priceRank1 + 50*priceRank2 +(electricityNumber-100)*priceRank3;
    } else if(electricityNumber<=300){
        total += 50*priceRank1+50*priceRank2+100*priceRank3+(electricityNumber-200)*priceRank4;
    } else if(electricityNumber<=400){
        total += 50*priceRank1+50*priceRank2+100*priceRank3+100*priceRank4 +(electricityNumber-300)*priceRank5;
    } else{
        total += 50*priceRank1+50*priceRank2+100*priceRank3+100*priceRank4+100*priceRank5+(electricityNumber-400)*priceRank6;
    }
    console.log(`Tiền điện tháng này của bạn là ${total} đồng`);
}