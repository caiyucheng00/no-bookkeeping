var xmlHttp = new XMLHttpRequest();

//GET 展示所有账本
function sendAJAXGet(callback) {
    // 获取用户名
    let userId = localStorage.getItem("id")
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("GET", "/account/userId?userId=" + userId);
    xmlHttp.send();
}

// GET显示用户名
function sendAJAXGet1(callback) {
    // 获取用户名
    let userId = localStorage.getItem("id")
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("GET", "/settings?userId=userId");
    xmlHttp.send();
}

window.onload = function () {
    sendAJAXGet(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            let book = document.getElementById("book")
            let str = '';
            for (var i = 0; i < res.data.length; i++) {
                str += '<li><a onclick="goDetail(event)"><i class="icomoon" id="res.data[i].accountId"></i><p hidden="hidden">' + (res.data[i].accountId) + '</p><p id="res.data[i].accountName">' + (res.data[i].accountName) + '</p></a></li>';
            }
            book.innerHTML = str;
        }
    })

    var userIdDon = document.getElementById('userName')
    userIdDon.innerHTML = localStorage.getItem("userName")
}

// POST 新增账本
function sendAJAXPost(bookName, callback) {
    let userId = localStorage.getItem("id")
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("POST", "/account");
    xmlHttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({"userId": userId, "accountName": bookName}));
}

function addBook() {
    // 弹窗获取用户输入
    let bookName = prompt('请输入新账本名称：')
    sendAJAXPost(bookName, function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            window.alert(res.data);
            location.reload()
        }
    })
}

// 点击账本跳转详情页
function goDetail(e){
    // 申明当前节点
    let bookDom = e.target
    // 声明所需信息所在节点
    let trueDom =e.target
    // 进入判断，当节点标签名为 i时，
    if(bookDom.tagName === "I"){
        // 当前节点的兄弟节点就是我们要找的节点
        trueDom = bookDom.nextSibling
    }
    // 获取节点信息，即
    let accountId =trueDom.innerHTML
    // 跳转页面
    window.location.href='./detail.html?accountId='+ accountId
}
