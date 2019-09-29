

[TOC]

# 对象

**`XMLHttpRequest();`**

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if ( xhr.readyState == 4 ) {
		try {
			if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 ) {
				alert( xhr.responseText );
			} else {
				alert( "Request was unsuccessful:" + xhr.status );
			}
		} catch ( ex ) {
			//
		}
	}
}
xhr.open( "get", "timeout.php", true );
xhr.send( null );
```



# 属性

`xhr.readyState`

异步请求时，需要判断该属性。该属性表示请求、响应过程的当前阶段。可取的值如下：

- 0：未初始化 UNSENT。尚未调用`open()`方法
- 1：启动 OPENED。已经调用`open()`方法，但尚未调用`send()`方法。
- 2：发送 HEADERS_REVEIVED。已经调用`send()`方法，但尚未接收到响应。
- 3：接收 LOADING。已经接收到部分响应数据。
- 4：完成 DONE。已经接收到全部响应数据，可以再客户端使用



`xhr.responseText`

作为响应主体被返回的文本。无论内容类型是什么，响应主体内容会被保存到该属性中。



`xhr.responseXML`

作为响应主体被返回的XML DOM文档。非xml数据，该属性值将为null。



`xhr.status`

响应的HTTP状态：

- 信息响应：100
- 成功响应：200
- 重定向：300
- 客户端响应:400
- 服务端响应：500



`xhr.statusText`

响应的HTTP状态说明，跨浏览器使用时不太可靠



`xhr.response`



`xhr.responseType`



`xhr.responseURL` 

返回响应的序列化URL或空字符串。ie不支持。

当URL被返回的时候，任何包含在URL # 后面的fragment都会被删除。 

responseURL 的值将会是经过任意多次重定向后的最终 URL 。



`xhr.upload`

跨浏览器支持不明确



# 方法

## GET请求

常用于向服务器查询某些信息

可以将查询字符串参数追加到URL的末尾

`xhr.open( "open", "example.php?name1=value1&name2=value2", true );`

查询字符串中的每个名称和值必须使用`encodeURIComponent()`进行编码，然后才能放到URL的末尾，见下函数：

```javascript
function addURLParam( url, name, value ) {
			url += ( url.indexOf( "?" ) == -1 ? "?" : "&" );
			url += encodeURIComponent( name ) + "=" + encodeURIComponent( value );
			return url;
}
```



## POST请求

常用于向服务器发送应该被保存的数据

post请求应该把数据作为请求的主体提交，而get请求传统上不是这样。

post请求的主体可以包含非常多的数据，而且格式不限。

- post请求发送第一步：xhr.open( "post", "example.php", true )
- post请求发送第二部：向send()方法中传入某些数据。



`xhr.open( method, url, async );`

接收三个参数：

- 要发送请求类型
- 请求url
- 是否异步发送请求



`xhr.open( "get", "example.php", false);`

这行代码会启动一个针对example.php的get请求

url是相对于执行代码的当前页面（当然也可以使用绝对路径）

调用open()方法并不会真正发送请求，只是启动一个请求以备发送

只能向同一个域中使用相同端口和协议的URL发送请求



`xhr.send( string );`

```javascript
xhr.open( "get", "example.txt", false );
xhr.send( null );
```

send()方法接收一个参数，作为请求主体发送的数据。

如果不需要请求主体发送数据，则必须传入null

调用send()后，请求会被分派到服务器。

收到响应后，响应的数据会自动填充xhr对象属性：

- `xhr.responseText`
- `xhr.responseXML`
- `xhr.status`
- `xhr.statusText`

接收到响应后，第一步检查status属性，确定已经成功返回。

状态码200作为成功标志；

状态码304作为表示请求资源没有被修改，可以直接使用浏览器中缓存的版本

```javascript
	if ( ( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 ) {
		alert( xhr.responseText );
	} else {
		alert( "Request was unsuccessful: " + xhr.status );
	}
```



`xhr.abort();`

在接收到响应之前还可以调用abort()方法来取消异步请求。

调用这个方法后，xhr对象会停止触发事件，而且也不再允许访问任何与响应有关的对象属性。



`xhr.setRequestHeader();`

使用xhr.setRequestHeader()方法可以设置自定义的请求头部信息。

这个方法接收两个参数：

- 头部字段名称
- 头部字段的值

```javascript
xhr.open( "get", "example.php", true );
xhr.setRequestHeader( "MyHeader", "MyValue" ); //自定义头部名称
xhr.send( null );
```

在调用xhr.open()方法之后且调用xhr.send()方法之前调用xhr.setRequestHeader()

建议使用自定义的头部字段名称，不要使用浏览器正常发送的字段名称，否则影响服务器的响应。

默认情况下，在发送xhr请求的同时，还会发送下列头部信息：

- Accept：浏览器能够处理的内容类型
- Accept-Charset：浏览器能够显示的字符集
- Accept-Encoding：浏览器能够处理的压缩编码
- Accept-Language：浏览器当前设置的语言
- Connection：浏览器与服务器之间的链接类型
- Cookie：当前页面设置的任何cookie
- Host：发出请求的页面所在的域
- Referer：发出请求页面的URI（http规范将这个头部字段拼写错了，只能将错就错）
- User-Agent：浏览器的用户代理字符串



`xhr.getResponseHeader();`

调用xhr.getResponseHeader()方法并传入头部字段名称，可以取得相应的响应头部信息。

`xhr.getResponseHeader( "MyHeader" );`



`xhr.getAllResponseHeaders();`

可以取得一个包含所有头部信息的长字符串



`xhr.overrideMimeType();`

用于重写xhr响应的MIME类型， ie不支持， xhrHttpRequest2级方法

必须在send()方法之前调用。

```javascript
xhr.open( "get", "text.php", true );

xhr.overrideMimiType( "text/xml" );

xhr.send( null );
```



# 进度事件

`xhr.onreadystatechange`

在调用xhr.open()之前指定onreadystatechange事件处理程序才能确保跨浏览器兼容。



`xhr.onloadstart`

在接收到响应的第一个字节时触发



`xhr.onloadend`

在通信完成或者触发error、abort或load事件后触发。没有浏览器支持



`xhr.onload`

接收到完整的响应数据时触发。

所有现代浏览器都支持。

与xhr.onreadystatechange事件功能类似



`xhr.onprogress`

在接收响应期间持续不断的触发，会接受一个event对象。

- event.target属性是xhr对象
- event.lengthComputable属性是一个表示进度信息是否可用的布尔值
- event.position属性表示已接收的字节数
- event.totalSize属性表示根据Content-Length响应头部确定的预期字节数



`xhr.onabort` 

在因为调用abort()方法而终止连接时触发



`xhr.onerror`

在请求发生错误时触发



`xhr.ontimeout`

超时事件

仅ie8+支持, xmlHttpResquest 2级



# XMLHttpRequest 2 级

> 跨浏览器兼容存在问题



`FormData();`

ie不支持

```javascript
var data = new FormData();
data.append( "name", "Nicholas" );
//也可以预先向其中填入键值对
var data = new FormData( document.forms[0] );
//可以将它直接传给xhr的send方法：
xhr.open( "post", "postexample.php", true );
var form = document.getElementById( "user-info" );
xhr.send( new FormData(form) );
```



`.append()`

接收两个参数：键和值，对应表单字段的名字和字段中包含的值



`xhr.timeout`

表示请求在等待响应多少毫秒之后就终止, 仅ie8+支持。



`xhr.ontimeout`

timeout事件

```javascript
xhr.open( "get", "timeout.php", true );
xhr.timeout = 1000;
xhr.ontimeout = function() {
	alert( "Request did not return in a second." );
}
xhr.send( null );
```









