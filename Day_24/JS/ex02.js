const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];

var result= function(){
    for(var i=0; i<customers.length; i++){
        for( var j=i+1; j<customers.length; j++){
            if(customers[i].age>customers[j].age){
                var temp= customers[i];
                customers[i]=customers[j];
                customers[j]=temp;
            }
        }
}
customers.forEach(customer => {
        var char = customer.name.split(' ');
        var shortNameStr = char[0] + ' ' + char[char.length - 1];
        customer.shortName = shortNameStr;
});
console.log(customers);
}
result();