var xmlHttp = new XMLHttpRequest();

//POST
function sendAJAXPost(callback) {
    let inputName = document.getElementById("username")
    let username = inputName.value
    let inputPassword = document.getElementById("password")
    let password = inputPassword.value
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("POST", "/user/login");
    xmlHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({ "username": username, "password": password }));
}

function resAJAXPost() {
    sendAJAXPost(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            if(res.code===1){
                // 存储数据
                localStorage.setItem('userName',res.data.userName)
                localStorage.setItem('userPassword',res.data.userPassword)
                localStorage.setItem('userEmail',res.data.userEmail)
                localStorage.setItem('id',res.data.userId)
                // 跳转页面
                window.location.href='./index.html'
            }else{
                window.alert("账号或密码错误")
            }
        }
    })
}

//register
//POST
function sendAJAXRegister(callback) {
    let inputName = document.getElementById("new-username")
    let username = inputName.value
    let inputPassword = document.getElementById("new-password")
    let password = inputPassword.value
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("POST", "/user/register");
    xmlHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({ "username": username, "password": password }));
}

function resAJAXRegister() {
    sendAJAXRegister(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            if(res.code===1){
                window.alert("注册成功")
                // 跳转页面
                window.location.href='./login.html'
            }else{
                window.alert("账号或密码错误")
            }
        }
    })
}