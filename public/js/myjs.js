function checkUserName(){
	var value = document.getElementById("username").value;
	if(value.length <= 10 && value.length > 0)
		return true;
	document.getElementById("usernameError").innerHTML="姓名最多10个字符且不为空！";
	return false;
}

function checkId(){
	var value = document.getElementById("id").value;
	if(value.length == 9)
		return true;
	document.getElementById("idError").innerHTML = "学号格式错误！";
	return false;
}

function checkPwd(){
	var value = document.getElementById("pwd").value;
	if(value.length >= 6)
		return true;
	document.getElementById("pwdError").innerHTML = "密码最低6位！";
	return false;
}

function hideError(obj){
	document.getElementById(obj).innerHTML = "";
}