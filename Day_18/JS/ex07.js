var multiplicationTable =`<div style="display: flex; margin: 30px auto; justify-content: center; align-items: center; flex-direction: column; width: 1200px;">`;
var heading = `<h1>Bảng Cửu Chương</h1>`;
multiplicationTable+=heading;

var container = `<div style="display: flex; justify-content: center; align-items: center; row-gap: 50px;
column-gap: 50px; flex-wrap: wrap">`;
for ( var i=1; i <=10; i++){
    var item=`<div style="width: 200px; display: flex; flex-direction: column; align-items:center; justify-content: center; row-gap: 20px; background-color: 
#DCFFCA; border-radius: 12px;">`;
    var itemHeading=`<h2 style="text-align: center; margin: 0; padding-top: 5px;">Bảng nhân ${i}</h2>`;
    item+=itemHeading;
    var list=`<ul style="list-style:none; display: flex; flex-direction: column; align-items:center; justify-content: center; padding: 0; row-gap: 5px;">`;
    for(var j=1; j<=10; j++){
        var listItem=`<li>`;
        var result = i*j;
        var equation= `${i} * ${j} = ${result}`
        listItem+=equation;
        listItem+=`</li>`;
        list+=listItem;
    }
    list+=`</ul>`;
    item+=list;
    item+=`</div>`;
    container += item;
}
container += `</div>`;
multiplicationTable +=container;
multiplicationTable+= `</div>`;
document.write(multiplicationTable);