var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}
function getError(field) {
    var errorTypeArr = field.split('.');
    for (var key in errors) {
        if (key === errorTypeArr[0]) {
            if (errorTypeArr[1] && errors[errorTypeArr[0]][errorTypeArr[1]]) {
                return errors[errorTypeArr[0]][errorTypeArr[1]];
            }
            return errors[errorTypeArr[0]].required;
        }
    }
    return 'false';
}

console.log(getError('email.email'));