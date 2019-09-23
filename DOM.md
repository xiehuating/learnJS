# DOM 2

### 查找HTML元素

```js
document.getElementById("id");

elementNode.getElementsByTagName("tagName"); 

elementNode.getElementsByClassName("classname"|"classname classname"); 
//返回所有包含classname的元素节点。

elementNode.querySelector("CssSelector"); 
//返回匹配css选择器的第一个元素节点

elementNode.querySelectorAll("CssSelector"); 
//返回匹配css选择器的所有元素节点列表
```



### 创建元素节点、属性节点、文本节点

```javascript
document.createElement("tagname");

document.createAttribute("attributename");

document.createTextNode("text");
```



### 插入新的子节点（元素）、删除子节点、替换子节点、在节点前插入节点

```js
parentElementNode.appendChild(child);
//返回child

parentElementNode.removeChild(child);
//返回被删除的child

parentElementNode.replaceChild(newNode, oldNode);
//返回oldNode

parentElementNode.insertBefore(newElement, referenceElement);
//返回newElement

elementNode.hasChildNodes();
//表明当前节点是否包含有子节点。

elementNode.normalize();
//将当前节点和它的后代节点”规范化“（normalized）。
//在一个"规范化"后的DOM树中，不存在一个空的文本节点，或者两个相邻的文本节点。
```



### 返回指定属性值、设置指定属性值

```js
elementNode.getAttribute("attributename");

elementNode.setAttribute("attributename", "attributevalue");

elementNode.getAttributeNode("attributename"); 
//返回指定属性节点

elementNode.setAttributeNode(attributenode); 
//设置或更改指定属性节点

elementNode.attributes;  
//节点（元素）的属性节点集合
```



### 节点（元素）的父节点、节点（元素）的子节点

```js
elementNode.parentNode

elementNode.childNodes 
//返回节点的子节点集合

elementNode.firstChild

elementNode.lastChild

elementNode.nextSibling  
//易错

elementNode.previousSibling  
//易错
```



### 节点的名称、节点的值、节点的类型

```js
node.nodeName;
//元素节点返回标签名；属性节点返回属性名；文本节点返回“#text”

node.nodeValue;
//元素节点返回null；属性节点返回属性值；文本节点返回文本内容；

node.nodeType;
//元素 1，属性 2，文本 3，注释 8，文档 9
```



### 设置或者返回节点的内容

```js
elementNode.innerHTML;

elementNode.innerText;
```



### 设置或返回节点及其后代的文本内容

```js
elementNode.textContent;

```



### 设置或返回元素的class，id，title

```js
elementNode.className; 
//注意此处是className不是class

elementNode.id;

elementNode.title;

elementNode.tagName;

elementNode.tabIndex;

```



### 根节点

```js
document.documentElement; 
// 全部文档

document.body; 
//文档的主体

elementNode.ownerDocument; 
// 返回元素的根元素（文档对象）

```



### 事件对象

```js
<h1 onclick="func()"> 请点击 <h1>
  
elementNode.onclick = func; 
//待页面加载完成后再绑定事件

elementNode.addEventListener("click", func, false);

elementNode.onclick = function(){func(p1, p2)}; 
//传递参数

elementNode.addEventListener("click", function(){func(p1,p2)}, false);

```



# DOM 3

```js
document.hasFocus();

document.activeElement;

```

