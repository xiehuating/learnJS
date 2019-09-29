[TOC]



# DOM

## 常用属性&方法

### 查找HTML元素

```javascript
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
//

document.createAttribute("attributename");
//

document.createTextNode("text");
//

```

### 插入新的子节点（元素）、删除子节点、替换子节点、在节点前插入节点

```js
parentElement.appendChild(child);
//返回child

parentElement.removeChild(child);
//返回被删除的child

parentElement.replaceChild(newNode, oldNode);
//返回oldNode

parentElement.insertBefore(newElement, referenceElement);
//返回newElement

element.hasChildNodes();
//表明当前节点是否包含有子节点。

element.normalize();
//将当前节点和它的后代节点”规范化“（normalized）。
//在一个"规范化"后的DOM树中，不存在一个空的文本节点，或者两个相邻的文本节点。
```

### 返回/设置元素属性和属性值

```js
element.getAttribute("attributename");
element.setAttribute("attributename", "attributevalue");

element.getAttributeNames();
//Returns an array of attribute names from the current element.

element.removeAttribute();
//Removes the named attribute from the current node.

element.getAttributeNode("attributename"); 
//已废弃，返回指定属性节点
element.setAttributeNode(attributenode); 
//已废弃，设置或更改指定属性节点



element.hasAttribute();
//Returns a Boolean indicating if the element has the specified attribute or not.
element.attributes;  
//节点（元素）的属性节点集合
```

### 元素的父子兄弟

```js
element.parentNode
element.childNodes 
//返回节点的子节点集合

element.firstChild
element.lastChild

element.nextSibling
element.previousSibling  
//易错

```

### 节点的名称、节点的值、节点的类型

```javascript
node.nodeName;
//元素节点返回标签名；属性节点返回属性名；文本节点返回“#text”

node.nodeValue;
//元素节点返回null；属性节点返回属性值；文本节点返回文本内容；

node.nodeType;
//元素 1，属性 2，文本 3，注释 8，文档 9
```

### 设置或者返回节点的内容

```js
element.innerHTML;
element.innerText;
//
```

### 设置或返回节点及其后代的文本内容

```js
element.textContent;
//
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



## 元素

### 元素属性

```js
element.attributes 
//只读，返回一个与该元素相关的所有属性集合 NamedNodeMap

element.className; 
//注意此处是className不是class

element.classList;
//只读，返回该元素包含的 class 属性，是一个DOMTokenList

element.clientHeight;
element.clientWidth;
//只读，返回Number 表示内部相对于外层元素的高度/宽度

element.clientLeft;
element.clientTop;
//只读，返回Number表示该元素距离它左边界/上边界的宽度

element.innerHTML;
//是一个DOMString 表示这个元素的内容文本
element.outHTML;
//是一个 DOMString，获取该DOM元素及其后代的HTML文本。
//在设置它的时候，会从给定的字符串开始解析，替换自身。

element.scrollHeight;
element.scrollWidth;
//返回类型为： Number，表示元素的滚动视图高度/宽度
element.scrollTop;
element.scrollLeft;
//返回类型为：Number，表示该元素纵向滚动条距离/横向滚动条距离最左的位移

element.id;

element.title;

elementNode.tagName;

elementNode.tabIndex;

```

### 元素方法

```js
Element.getAttribute();
Element.setAttribute();
Element.removeAttribute();
//
Element.getAttributeNames()
//

Element.getBoundingClientRect();
//

Element.getClientRects();
//

Element.getElementsByClassName();
Element.getElementsByTagName();

Element.querySelector();
Element.querySelectorAll();


Element.hasAttribute();
// 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。
Element.hasAttributes();
//返回一个布尔值true或false,来表明当前元素节点是否有至少一个的属性(attribute)

EventTarget.addEventListener();
EventTarget.removeEventListener();
//

Element.scroll();
Element.scrollBy();
Element.scrollTo();
//

Element.toggleAttribute();
//切换给定元素的某个布尔值属性的状态（如果属性存在则添加属性，属性不存在则移除属性）。
```

### 元素事件

#### Clipboard events

#### Composition events

#### Focus events

#### Fullscreen events

#### Keyboard events

#### Mouse events

#### Touch events



### 绑定事件

```js
<h1 onclick="func()"> 请点击 <h1>
  
element.onclick = func; 
//待页面加载完成后再绑定事件

element.addEventListener("click", func, false);
//方法将指定的监听器注册到 EventTarget 上
element.removeEventListener("click", func, false);
//删除使用 EventTarget.addEventListener() 方法添加的事件

element.onclick = function(){func(p1, p2)}; 
element.addEventListener("click", function(){func(p1,p2)}, false);
//传递参数


```



## 文档对象

### 文档属性

```javascript
Document.anchors;
//

Document.head;
Document.body;
//

Document.characterSet;
//

Document.documentElement;
//

Document.documentURI;
//

Document.forms;
//

Document.images;
//

Document.links;
//

Document.scripts;
//

Document.styleSheetSets;
//




```

### 文档方法

```javascript
Document.createAttribute()；
//

Document.createElement()；
//

Document.createTextNode()；
//

Document.getElementsByClassName()；
//

Document.getElementsByTagName()；
//

document.getElementById()；
//

document.querySelector()；
//

document.querySelectorAll()；
//

document.getElementsByName()；
//

document.hasFocus()；
//

document.open()；
document.write()；
document.close()；
//用于结束由 对文档的 Document.write() 写入操作，这种写入操作一般由 Document.open() 打开。

//以下代码，会打开一个文档，并将原有内容替换为一些不同的HTML片段，然后关闭文档。
//document.open(); 
//document.write("<p>Hello world!</p>");
//document.write("<p>I am a fish</p>");
//document.write("<p>The number is 42</p>"); 
//document.close();

```

### 文档事件

#### Animation events

#### Clipboard events

#### Drag & drop events

#### Fullscreen events

#### Keyboard events

#### Load & unload events

#### Pointer events

#### Selection events

#### Touch events

#### Transition events



## 节点

**Node** 是一个接口，许多 DOM API 对象的类型会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如, 继承同一组方法，或者用同样的方式测试。

以下接口都从 `Node` 继承其方法和属性：

[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document), [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element), [`Attr`](https://developer.mozilla.org/zh-CN/docs/Web/API/Attr), [`CharacterData`](https://developer.mozilla.org/zh-CN/docs/Web/API/CharacterData) (which [`Text`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text), [`Comment`](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment), and [`CDATASection`](https://developer.mozilla.org/zh-CN/docs/Web/API/CDATASection) inherit), [`ProcessingInstruction`](https://developer.mozilla.org/zh-CN/docs/Web/API/ProcessingInstruction), [`DocumentFragment`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment), [`DocumentType`](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentType), [`Notation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Notation), [`Entity`](https://developer.mozilla.org/zh-CN/docs/Web/API/Entity), [`EntityReference`](https://developer.mozilla.org/zh-CN/docs/Web/API/EntityReference)

### 节点属性

```javascript
node.parentNode;
node.childNodes;
node.firstChild;
node.lastChild;
node.nextSibling;
node.previousSibling;
//

node.parentElement;
//

node.textContent;
//

node.ownerDocument;
//

```

### 节点方法

```javascript
node.appendChild();
node.removeChild();
node.replaceChild();
node.insertBefore();
node.cloneNode();

Node.contains();
//返回一个 Boolean 布尔值，来表示传入的节点是否为该节点的后代节点。

Node.getRootNode();
//

Node.hasChildNodes();
//

Node.insertBefore()
//

Node.normalize();
//

```



