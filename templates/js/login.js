function login() {
    var login_form = document.querySelector('#login_form')
    var userID = document.querySelector('#userID')
    var userPWD = document.querySelector('#userPWD')
    if (userID.value.length == 0) {
        alert('아이디는 필수 입력 입니다.');
        userID.focus();
        return false;
    }

    if (userPWD.value.length == 0) {
        alert('비밀번호 필수 입력 입니다.');
        userPWD.focus();
        return false;
    }

    return true;
}