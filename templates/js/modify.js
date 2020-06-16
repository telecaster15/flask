var userPWD = document.querySelector('#userPWD')
var userPWDre=document.querySelector('#userPWDre')
var userName=document.querySelector('#userName')
var userNick=document.querySelector('#userNick')
var userEmail=document.querySelector('#userEmail');

function modify(){
	 if (userPWD.value.length === 0) {
	        alert('비밀번호 필수 입력 입니다.');
	        userPWD.focus();
	        return false;
	    }

	     if (!userPWDre.value.length) {
	        alert('비밀번호 확인은 필수 입력 입니다.');
	        userPWDre.focus();
	        return false;
	    }

	    if (userPWD.value !== userPWDre.value){
	        alert('비밀번호와 비밀번호확인 값이 같아야 합니다.');
	        userPWD.value='';
	        userPWDre.value='';
	        userPWD.focus();
	        return false;
	    }

	    if (!userPWDre.value.length) {
	        alert('비밀번호 확인은 필수 입력 입니다.');
	        userPWDre.focus();
	        return false;
	    }

	    if (!userName.value.length) {
	        alert('이름은 필수 입력 입니다');
	        userName.focus();
	        return false;
	    }

	    if (!userNick.value.length) {
	        alert('닉네임은 필수 입력 입니다.');
	        userNick.focus();
	        return false;
	    }

	    if (!userEmail.value.length) {
	        alert('E-mail은 필수 입력 입니다.');
	        userEmail.focus();
	        return false;
	    }
	    return true;
	
}