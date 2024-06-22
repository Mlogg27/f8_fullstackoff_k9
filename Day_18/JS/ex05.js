var N=10; //Số dòng
var number=1;
var numberTriangle=`<p style="margin: 30px; display: flex; justify-content: center; align-items: center">`;

for( var i=1; i<=N; i++){
    var nextNumber="";
    for( var j=1; j<=i; j++){
        nextNumber += number + " ";
        number++;
    }
    numberTriangle += nextNumber +`<br>`;
}
numberTriangle += `</p>`;
document.write(numberTriangle);
