var a=-2;
var b=0;
var c=-1;
if (a>b){
    a+=b;
    b= a-b;
    a -=b;
}
if (b>c) {
    b+=c;
    c= b-c;
    b -=c;
}
if (a>c) {
    a+=c;
    c= a-c;
    a -=c;
}
console.log(`Thứ tăng dần là ${a}, ${b}, ${c}`);