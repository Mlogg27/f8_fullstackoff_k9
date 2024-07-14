const data = [];

var dataRegister = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
var dataRegister = handleRegister(
    "Nguyen Van C",
    "123457",
    "nguyenvanc@email.com"
);

function handleRegister(userName, userPassword, userEmail){
    if (!userName || !userPassword || !userEmail) {
        return 'Error';
    } 
    var user = {
        name: `${userName}`,
        password: `${userPassword}`,
        email: `${userEmail}`,
        role: 'User',
    };
    data.push(user); 
}

console.log(data);

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
function handleLogin(emailLogin, passwordLogin){
    for( var index in data){
       if(emailLogin === data[index].email && passwordLogin === data[index].password){
       var userLogin={
        name: data[index].name,
        email: emailLogin,
        password: passwordLogin,
        role: data[index].role,
       };
       return userLogin;
       }
    }
    return 'Thông tin đăng nhập không hợp lệ';
};
console.log(dataLogin);