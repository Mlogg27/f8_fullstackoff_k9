Array.prototype.push2=function(...args){
    for( var i=0; i< args.length; i++){
        this[this.length]=args[i];
    }
    return this.length;
};
var numbers=['1', '2', '3', '4'];
var newNumbers = numbers.push2('5');
console.log(newNumbers);
