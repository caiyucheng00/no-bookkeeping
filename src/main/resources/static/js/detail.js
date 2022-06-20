var xmlHttp = new XMLHttpRequest();

//GET 展示所有账单记录
function sendAJAXGet(callback) {
    // 获取地址后的字符串
    let search = window.location.search
    let str = search.substr(1)
    let pair = str.split('=')
    localStorage.setItem('accountId', pair[1])
    // 此时pair[0]为accountId属性名；pair[1]为accountId属性值
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("GET", "/records/accountId?accountId=" + pair[1]);
    xmlHttp.send();
}

//DELETE 根据id删除账单
function sendAJAXDelete(delId, callback) {
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("DELETE", "/records/recordId?recordId=" + delId);
    xmlHttp.send();
}

/* function resAJAXGet() {
    sendAJAXGet(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
        }
    })
} */
window.onload = function () {
    sendAJAXGet(function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            let tbody = document.getElementsByTagName('tbody')[0]
            let str = '';
            let type = []
            let inOrOut = []
            let note = []
            for (var i = 0; i < res.data.length; i++) {
                switch (res.data[i].spendType) {
                    case 1:
                        type[i] = "交通费用"
                        break
                    case 2:
                        type[i] = "餐饮"
                        break
                    case 3:
                        type[i] = "购物"
                        break
                    case 4:
                        type[i] = "日用品"
                        break
                    case 5:
                        type[i] = "休闲娱乐"
                        break
                    case 6:
                        type[i] = "住房"
                        break
                    case 7:
                        type[i] = "教育"
                        break
                    case 8:
                        type[i] = "医疗"
                        break
                    default:
                        break
                }
                switch (res.data[i].inOut) {
                    case 1:
                        inOrOut[i] = "支出"
                        break
                    case 2:
                        inOrOut[i] = "收入"
                        break
                }
                if (res.data[i].note == null) {
                    note[i] = ''
                } else {
                    note[i] = res.data[i].note
                }
                str += '<tr><td>'
                    +(res.data[i].date)
                    +'</td><td>'
                    +(inOrOut[i])
                    +'</td><td>'
                    +(type[i])
                    +'</td><td>'
                    +(note[i])
                    +'</td><td>'
                    +(res.data[i].money)
                    +'<td onclick="deleteBill(event)">'
                    +'<button><p hidden="hidden">'
                    +(res.data[i].recordId)
                    +'</p >删除</button></td></tr>';
            }
            tbody.innerHTML = str;
        }
    })
    // 显示用户名
    // var userIdDon = document.getElementById('userName')
    // userIdDon.innerHTML = localStorage.getItem("userID")
}

// 编辑操作(弃用)
function editBill(e) {
    // 获取要编辑的账单id
    let billID = e.target.id
    // 
}

// 删除操作
function deleteBill(e) {
    // 获取要编辑的账单id
    let delId = e.target.firstElementChild.innerHTML
    // 发送delete请求，获取返回信息
    sendAJAXDelete(delId,function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var res = JSON.parse(xmlHttp.responseText);
            if (res.code == 1) {
                window.alert(res.data)
                location.reload()
            } else {
                window.alert(res.msg)
            }
        }
    })
}

// 获取菜单内容
// 订单搜索框
let getID = document.getElementById("getId").value
// 账单类型
//字符串
let inNOut = document.getElementById("in&out").value
// 数字（inOutN）
if (inNOut == "收入") {
    var inOutN = 1
} else {
    inOutN = 2
}
// 起始时间
let startTime = document.getElementById("startTime").value
// 结束时间
let endTime = document.getElementById("endTime").value