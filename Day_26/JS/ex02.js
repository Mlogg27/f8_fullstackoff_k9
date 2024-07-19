Array.prototype.filter2= function(callback){
    var result=[];
    if( typeof callback !== 'function'){
        return "Error";
    }
    for( var i=0; i< this.length; i++){
        var value=this[i];
        var index=i;
        if (callback(value, index)){
            result.push(value);
        }
    }
    return result;
};

var numbers=['1', '2', '3', '4'];
var newNumbers = numbers.filter2(function(value, index){
    return +value %2 ===0;
});
console.log(newNumbers);