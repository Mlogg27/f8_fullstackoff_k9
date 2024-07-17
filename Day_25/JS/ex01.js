function getTotal(...numbers){
    for( var num of numbers){
        if( typeof num !== 'number'){
            return 'Lỗi';
        }
    };
    var sum = numbers.reduce(function(total, totalCurrent){
        return total + totalCurrent;
    }, 0)

    return sum;
};

console.log(getTotal(1, 2, 3, 4));