
function testing () {

    var Writer = document.querySelector('#bname')
    var Title = document.querySelector('#btitle')
    var Txt = document.querySelector('#bcontent')
    var Pwd = document.querySelector('#bpw')

    if (!Writer.value.length) {
        alert("작성자는 필수 입력 입니다.")
        return false;
    }
    if (!Title.value.length) {
        alert("제목은 필수 입력 입니다.")
        return false;
    }
    if (!Txt.value.length) {
        alert("내용은 필수 입력 입니다.")
        return false;
    }
    if (!Pwd.value.length) {
        alert("비밀번호는 필수 입력 입니다.")
        return false;
    }
return true;
}


function deltesting() {
	
    var delPwd = document.querySelector('#bpw');
    var delete_form = document.write_form;
   
    if (delPwd.value.length==0) {
        alert("비밀번호는 필수 입력 입니다.")
        delPwd.focus();
        return false;
    }
    
    
    document.write_form.submit();
    delete_form.submit();
    //$('form').submit();

    

}

function deltesting2() {
	
	var delet_form = document.write_form;
    var delPwd = delet_form.bpw;
   
    if (delPwd.value.length==0) {
        alert("비밀번호는 필수 입력 입니다.")
        delPwd.focus();
        return false;
    }
    
    return true;

    

}

