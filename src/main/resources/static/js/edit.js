var xmlHttp = new XMLHttpRequest();

// POST 新增账单
function sendAJAXPost(accountId,note,money,dateTime,inOutNum,typeNum,callback) {
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("POST", "/records");
    xmlHttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
    xmlHttp.send(JSON.stringify({
        "accountId": accountId,
        "inOut": inOutNum,//1 代表支出，2 代表收入
        "spendType": typeNum,
        "date" : dateTime,
        "money" : money,
        "note" : note
    }));
}
/* function resAJAXPost() {
    sendAJAXPost(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            window.alert(res.data);
        }
    })
} */
function submitBill(){
    let accountId = localStorage.getItem("accountId")
    let note = document.getElementById("note").value
    let money = document.getElementById("money").value
    let date = document.getElementById("date").value
    let time = document.getElementById("time").value
    let dateTime = date.concat(" " + time + ":00")
    let inOut = document.getElementById("inOut").value
    let inOutNum = ''
    switch(inOut){
        case "支出":
            inOutNum = 1
            break
        default:
            inOutNum = 2
            break
    }
    let type = document.getElementById("spendType").value
    let typeNum = ''
    switch(type){
        case "交通费用":
            typeNum = 1
            break
        case "餐饮":
            typeNum = 2
            break
        case "购物":
            typeNum = 3
            break
        case "日用品":
            typeNum = 4
            break
        case "休闲娱乐":
            typeNum = 5
            break
        case "住房":
            typeNum = 6
            break
        case "教育":
            typeNum = 7
            break
        case "医疗":
            typeNum = 8
            break
        default:
            break
    }
    sendAJAXPost(accountId,note,money,dateTime,inOutNum,typeNum,function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            if(res.code === 1){
                window.alert(res.data)
                window.location.href="detail.html?accountId=" + accountId
            }else{
                window.alert("res.msg")
            }
        }
    })
}

window.onload = function(){
    // 显示用户名
    var userIdDon = document.getElementById('userName')
    userIdDon.innerHTML = localStorage.getItem("userID")
}