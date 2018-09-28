//条件判断
if ( document.getElementById("elementId") ) {
	//如果获取到id为"elementId"的元素，则执行code
}
if ( !document.getElementById("elementId") ) {
	//如果没有获取到id为"elementId"的元素，则执行code
}

if (!document.getElementById ) {
	//如果浏览器不支持getElement方法，则执行code
}

if ( typeof window.onload != 'function') {
	//如果window.onload还未有方法，则执行code
}

// 适用于新老浏览器的 getElementsByClassName,这个例子不适用与多个类名的情况。 P42
function getElementsByClassName(node, classname) {
	if (node.getElementsByClassName) {
		//如果geitElementsByClassName方法为true，使用现有方法
		return node.getElementsByClassName(classname);
	} else {
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].className.indexOf(classname) != -1){
				results[results.length] = elems[i];
			}
		}
		return results;
	}
}


//
if(something) 等价于 if(something!=null)



//使用window.onload加载运行多个函数。
window.onload = function() {
	func1();
	func2();
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if ( typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}



//在元素后插入元素
function insertAfter(newElement, targetElement){
	var parent = targetElement.parentNode;
	if (parentNode.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}

}




//
function addClass(element, value) {
	if(!element.className) {
		element.className = value;
	} else {
		var newClassName = element.className;
		newClassName += " " ;
		newClassName += value ;
		element.className = newClassName;
	}
}



//适用于新老浏览器的XMLHttpRequest方法。P116
function getHTTPObject() {
	if (typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch (e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch (e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP"); }
			catch (e) {}
			return false;
		}
	}
	return new XMLHttpRequest();
}



//使用XMLHttpRequest方法从服务器异步获取数据并添加到页面中。P116
function getNewContent() {
	//申明一个getHTTPObject对象
	var request = getHTTPObject();  
	if(requset) {
		//请求方式和请求文件
		request.open( "GET", "example.txt", true);	
		//添加状态监测事件
		request.onreadystatechange = function() {	
			//request状态变为4时执行代码
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		//发送请求
		request.send(null);		
	} else {
		alert("Sorry, your browser dosen\'t support XMLHttpRequest");
	}
}

