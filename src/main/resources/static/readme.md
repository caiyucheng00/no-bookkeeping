前端同学注意下哈：

index.html 是主界面（即登录后的我的账本界面），引用了base.css(全局样式)和common.css(主页样式)

写其他三个功能页面时，可以将index.html直接复制，然后更改<divclass="rightContent">标签下的内容即可。注意每个页面写样式时，需要新建一个样式表放到css文件夹内，然后引用到你写的功能页里。

fonts文件夹里是字体图标，用的是icomoon


#1水平居中方式：

父元素设置宽度

子元素设置

{

margin: 0 auto

text-align: center

}


2022年6月16日00:04:47 更新 ：添加登录页面（HTML+CSS+JS）
