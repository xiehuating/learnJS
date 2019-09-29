[TOC]



# BOM


## Windows 

注意窗口对象每个浏览器实现的方式都不一样，浏览器间的兼容会存在很多问题。

### windows&frame

`window.frames[0];`

`window.frames["frameName"];`

`top.frames[0];` //top指向最高层框架

`top.frames["frameName"];`

`parent;` //指向当前框架的直接上层框架

`self;` //指向windows

<br/>

### 窗口位置

`window.screenLeft;`

`window.screenTop;`

`window.moveTo(width, height);` //移动到

`window.moveBy(width, height);` //移动多少

<br/>

### 窗口大小

`window.innerWidth;`

`window.innerHeight;`

`window.outerWidth;` //不同浏览器兼容有问题

`window.outerHeight;` //不同浏览器兼容有问题

`document.documentElement.clientWidth;`

`document.documentElement.clientHeight;`

`document.body.clientWidth;`

`document.body.clientHeight;`

`element.clientWidth;`

`element.clientHeight;`

`window.resizeTo(width, height);`

`window.resizeBy(width, height);`

<br/>

### 导航和打开窗口

`window.open();`

`window.close();`

```javascript
var wroxWin = window.open( "http://www.wrox.com", "wroxWindow", "height=400,width=400,top=10,left=10,resizeable=yes" );
wronWin.resizeTo(500,500);
wroxWin.moveTo(100,100);
wroxWin.close();
```

<br/>

### 间歇调用和超时调用

`window.setInterval( func, delay[, param1, param2, ...] );`

`window.clearInterval();`

`window.setTimeout( func[, delay, param1, param2, ...] );`

`window.clearTimeout();`

`window.requestAnimationFrame();`

<br/>

### 系统对话框

`window.alert();` //警告对话框

`window.confirm();` //确认对话框

`window.prompt();` //输入对话框

`window.print();`

`window.find();`

<br/>

## Navigator

<br/>

## Screen

`window.screen.availHeight;` //屏幕像素高度减系统部件像素高度（只读）

`window.screen.availWidth;` //屏幕像素宽度减系统部件像素宽度（只读）

```javascript
//使用availHeight和availWidth属性最大化浏览器窗口
window.resizeTo( screen.availWidth, screen.availHeight );
```

`window.screen.height;` //屏幕像素高度（只读）

`window.screen.width;` //屏幕像素宽度（只读）

`window.screen.colorDepth;` //屏幕表现颜色位数（只读）

<br/>

## History

`window.history;`

`window.history.go();`

`window.history.go( -1 );` //后退一页

`window.history.go( 1 );` //前进一页

`window.histoty.go( 2 );` //前进两页

`window.history.go( "wrox.com" );` //跳转到最近的worx.com页面

`window.history.back();` //后退

`window.history.forward();` //前进

`window.history.length;` //返回历史记录数量

<br/>

## Location 

最有用的BOM之一，提供了当前窗口中加载文档的信息，以及一些导航功能，ie、Opera不支持Location对象

`window.location;` //与document.location等价

`window.location.href;` //返回完整URL

`window.location.origin;` //返回“http://www.wrox.com:8080”

`window.location.protocol;` //返回使用协议，“http://”

`window.location.host;` //返回服务器名称和端口，“www.wrox.com:8080”

`window.location.hostname;` //返回服务器名称，“www.wrox.com”

`window.location.port;` //返回端口，“8080”

`window.location.pathname;` //返回URL中的目录和文件名，“/WileyCDA/”

`window.location.hash;` //返回URL中hash“#contents”

`window.location.search;` //返回URL查询字符串，“？q=javascript”

`window.location.assign("http://www.baidu.com");` //改变访问页面

`window.location.replace("http://www.baidu.com");` //改变访问页面，但不会生成历史记录，也不能回退

`window.location.reload();` //重新加载（有可能从缓存中加载）

`window.location.reload(true);` //重新加载（从服务器加载）

<br/>

## Storage




