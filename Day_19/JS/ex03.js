function numberToText(number){
    var result='';
    var originalNumber=number;

    if (number<0 || number>9999){
        return "Lỗi điều kiện";
    }
    if (number ===0){
        console.log ("không");
    }
    
    var thousands = Math.floor(number/1000);
    if (thousands>0) {
    result+= numberSpeak(thousands) +' ngàn ';
    number= number %1000;
    }

    var hundreds = Math.floor(number/100);
    if(hundreds>0){
    result+= numberSpeak(hundreds) + ' trăm ';
    number %= 100;
    }
    if(hundreds===0){
        result+= 'không trăm linh ';
    }

    if (number>=11&&number<=19){
        switch(number){
            case 11: result+= ' mười một'; break;
            case 12: result+= ' mười hai'; break;
            case 13: result+= ' mười ba'; break;
            case 14: result+= ' mười bốn'; break;
            case 15: result+= ' mười năm'; break;
            case 16: result+= ' mười sáu'; break;
            case 17: result+= ' mười bảy'; break;
            case 18: result+= ' mười tám'; break;
            case 19: result+= ' mười chín'; break;
        }
    } else{
        var dozens= Math.floor(number/10);
        if (dozens>0){
            result+= numberSpeak(dozens) + ' mươi ';
            number %=10;
        }
    }

    if (number>0){
        result+= numberSpeak(number);
    }
    console.log(`Số ${originalNumber} đọc là ${result}`);
}
function numberSpeak(number){
    switch(number){
        case 1: return 'một';
        case 2: return 'hai';
        case 3: return 'ba';
        case 4: return 'bốn';
        case 5: return 'năm';
        case 6: return 'sáu';
        case 7: return 'bảy';
        case 8: return 'tám';
        case 9: return 'chín';
    }
}
numberToText(320);