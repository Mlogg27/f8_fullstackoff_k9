var chessBoard= `<table style="border-collapse: collapse; margin: 30px auto; width: auto; height: auto">`;
var row=8;
var column=8;
var blackColor ="#000";
var whiteColor ="#fff";

for (var i=1; i<=row; i++){
    chessBoard = chessBoard + "<tr>";
    for( var j=1; j<=column; j++){
        if ((i+j)%2===0 ){
            chessBoard += `<td style="background-color: ${blackColor}; width: 50px; height: 50px;"></td>`;
        }
        else{
            chessBoard += `<td style="background-color: ${whiteColor}; width: 50px; height: 50px"></td>`;
        }
    }
    chessBoard = chessBoard + "</tr>";
}
chessBoard += `</table>`;
document.write(chessBoard);