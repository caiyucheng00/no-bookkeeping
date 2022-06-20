//获取上传按钮
var input1 = document.getElementById("upload");
if (typeof FileReader === 'undefined') {
    //result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    input1.setAttribute('disabled', 'disabled');
} else {
    input1.addEventListener('change', readFile, false);

}

function readFile() {
    var file = this.files[0]; //获取上传文件列表中第一个文件
    if (!/image\/\w+/.test(file.type)) {
        //图片文件的type值为image/png或image/jpg
        alert("文件必须为图片！");
        return false;
    }
    // console.log(file);
    var reader = new FileReader(); //实例一个文件对象
    reader.readAsDataURL(file); //把上传的文件转换成url
    //当文件读取成功便可以调取上传的接口
    reader.onload = function (e) {
        var image = new Image();
        // 设置src属性
        image.src = e.target.result;
        var max = 200;
        // 绑定load事件处理器，加载完成后执行，避免同步问题
        image.onload = function () {
            // 获取 canvas DOM 对象
            var canvas = document.getElementById("cvs");
            // 获取 canvas的 2d 环境对象,
            var ctx = canvas.getContext("2d");
            // canvas清屏
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, 200, 200);
        };
    }
};

var xmlHttp = new XMLHttpRequest();
//POST
function sendAJAXPut(callback) {
    // 获取用户输入用户名
    let newName = document.getElementById("text1").value
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("PUT", "/settings");
    xmlHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({ "newName": newName }));
}

// 修改用户名
function submitChange(){

    // 发送ajax
    sendAJAXPut(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            if(res.code==1){
                window.alert("修改成功")
                window.location.href="index.html"
            }else{
                window.alert("哎呀，失败了")
            }
        }
    })
}

window.onload = function(){
    var userIdDon = document.getElementById('userName')
    userIdDon.innerHTML = localStorage.getItem("userID")
}

// 注销登录
function sendAJAXGet(callback) {
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("GET", "/user/logout");
    xmlHttp.send();
}

function logout(){
    sendAJAXGet(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            // 需要清除相关数据，暂时未写


            
            alert("注销成功")
        }
    })
    setTimeout(() => {
        window.location.href="./login.html"
    }, 1000);
}