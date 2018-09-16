//查找HTML元素
	document.getElementById("id");
	node.getElementsByTagName("tagnName"); 
	node.getElementsByClassName("classname"|"classname classname"); //返回所有包含classname的元素节点。

	node.querySelector("CssSelector"); //返回匹配css选择器的第一个元素节点
	node.querySelectorAll("CssSelector"); //返回匹配css选择器的所有元素节点列表


//创建元素节点、属性节点、文本节点
	document.createElement("tagname");
	document.createAttribute("attributename");
	document.createTextNode("text");


//插入新的子节点（元素）、删除子节点、替换子节点、在节点前插入节点
	parentNode.appendChild(node);
	parentNode.removeChild(node);
	parentNode.replaceChild(newNode, oldNode);
	node.insertBefore(newNode);


//返回指定属性值、设置指定属性值
	node.getAttribute("attributename");
	node.setAttribute("attributename", "attributevalue");
	node.getAttributeNode("attributename"); //返回指定属性节点
	node.setAttributeNode(attributenode); //设置或更改指定属性节点


//节点（元素）的父节点、节点（元素）的子节点
	node.parentNode
	node.childNodes //返回节点的子节点集合
	node.firstChild
	node.lastChild
	node.nextSibling
	node.previousSibling


//节点的名称、节点的值、节点的类型
	node.nodeName;
	node.nodeValue;
	node.nodeType; //元素 1，属性 2，文本 3，注释 8，文档 9


//设置或者返回节点的内容
	node.innerHTML;

//设置或返回节点及其后代的文本内容
	node.textContent;


//节点（元素）的属性节点集合
	node.attributes
//设置或返回元素的class，id，title
	node.className //注意此处是className不是class
	node.id
	node.title



//根节点
	document.documentElement // 全部文档
	document.body //文档的主体
	node.ownerDocument // 返回元素的根元素（文档对象）


//事件
	<h1 onclick="func()"> 请点击 <h1>
	document.getElementById("id").onclick = func; //待页面加载完成后再绑定事件
	node.addEventListener("click", func, false);

	document.getElementById("id").onclick = function(){func(p1, p2)}; //传递参数
	node.addEventListener("click", function(){func(p1,p2)}, false);




//需要注意的点：
	//html页面的加载
	//JS加载和执行的顺序


