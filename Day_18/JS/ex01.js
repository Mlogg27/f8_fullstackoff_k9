var distance=125;
var price=15000;
var priceRank2=13500;
var priceRank3= 11000;
var priceDifferent1=price-priceRank2;
var priceDifferent2= priceRank2-priceRank3;
var priceDifferent3=price-priceRank3;
var saleRate=10/100;
var total=0;

if (distance<=0){
    console.log(`Rồi taxi làm gì???`)
} else {
    if (distance<=1){
        total+=price;
    } else if (distance<=5){
        total= distance*priceRank2 + priceDifferent1;
    } else {
        total= distance*priceRank3 + priceDifferent3 +4*priceDifferent2;
    }
    console.log(`Giá taxi của bạn là ${total} đồng`);
    if (distance>120){
        var salePrice= total*(1-saleRate);
        console.log(`Và sau khi giảm giá là ${salePrice} đồng`);
}
}

