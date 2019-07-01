WIP


## 事件流&事件处理程序

事件流：冒泡&捕获

HTML事件处理程序

DOM0级事件处理程序

DOM2级事件处理程序

IE事件处理程序

跨流浪器事件处理程序



## Event对象

event.target;

event.type;

event.cancelable;

event.eventPhase;

event.preventDefault();

event.stopPropagation();

通过一个函数处理多个事件

IE事件对象

跨浏览器事件对象



## Event类型

### 01.UI事件

window.onload //完全加载完毕后触发，可在window、frame、img、object元素上面触发

window.onunload //完全卸载完毕后触发，可在window、frame、object元素上面触发

window.onresize //窗口或框架大小发生变化时在window或者框架上面触发

window.onscroll //当用户滚动带滚动条的元素中的内容时，在该元素上触发。body元素中包含所加载页面的滚动条

window.onerror //js发生错误在window触发，无法加载图像在img触发，无法加载嵌入内容在object触发，有框架无法加载时在frameset上触发

inputElement.onselect //用户选择文本框中一个或多个字符时触发。可在input、textarea 

objElement.onabort //用户停止下载过程时，如果嵌入内容没有加载完成，在object元素上面触发



### 02.焦点事件

element.onfouce //在元素获得焦点时触发。不冒泡

element.onblur //在元素失去焦点时触发。不冒泡



### 03.鼠标滚轮事件

//页面上所有元素都支持鼠标事件，除mouseenter和mouseleave，所有鼠标事件都会冒泡，也可以被取消

//取消鼠标事件将会影响浏览器的默认行为。

element.onclick //单击鼠标按钮或按下回车键时触发

​	//单击触发流程:

​	//mousedown -> mouseup -> click 

element.ondbclick //双击鼠标按钮时触发

​	//双击触发流程:

​	//mousedown -> mouseup -> click -> mousedown -> mouseup -> click -> dbclick

element.onmousedown //按下任意鼠标按钮时触发，不能通过键盘触发

element.onmouseup //释放鼠标按钮时触发，不能通过键盘触发

element.onmouseover //在鼠标指针位于一个元素外部，然后用户将其首次移入另一个元素边界之内时触发。

element.onmouseout //鼠标指针位于一个元素上方，然后用户将其移入另一个元素时触发。又移入的另一个元素可能位于前一个元素的外部，也可能是这个元素的子元素。

element.onmouseenter //鼠标光标从元素外部首次移动到元素范围之内时触发。不冒泡，光标移动到后代元素上不会触发。

element.onmouseleave //在位于元素上方的鼠标光标移动到元素范围之外时触发。不冒泡，光标移动到后代元素上不会触发。

element.onmousemove //当鼠标指针在元素内部移动时重复触发

element.onmousewheel //



### 04.键盘文本事件

用户使用键盘时会触发键盘事件。

键盘字符键被按下后事件触发流程：

1. keydown -> keypress -> keyup
2. keydown、keypress是在文本框发生变化之前被触发的。
3. keyup是在文本框已经发生变化之后被触发的。
4. 如果用户按下了一个字符键不放，就会重复触发keydown和keypress事件，直到用户松开该键为止。

键盘非字符键被按下后事件触发流程：

1. keydown -> keyup
2. 如果按住这个非字符键不放，那么就会一直重复触发keydown事件，直到用户松开这个键，此时会触发keyup。


element.onkeydown //按下键盘上任意键触发。如果按住不放会重复触发


element.onkeypress //按下键盘上字符键、Esc键时触发。如果按住不放会重复触发。


element.onkeyup //释放键盘上的键时触发


element.ontextInput //在文本被插入文本框之前触发，对keypress的补充。用意是将文本显示给用户之前更容易拦截文本。



### 05.复合事件（只有IE9支持，不考虑）

​	



### 06.DOM变动事件

变动事件是为XML或HTML DOM设计的，并不特定与某种语言。

#### 删除节点

在使用removeChild()或replaceChild()从DOM删除节点时，触发流程如下：
DOMNodeRemoved -> DOMNodeRemovedFromDocument -> DomSubtreeModified

#### 插入节点

在使用appendChild(), insertBefore(), replaceChild()向DOM中插入节点时，触发流程如下：
DOMNodeInserted -> DOMNodeInsertedIntoDocument -> DOMSubtreeModified

document.onDOMSubtreeModified //在DOM结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。

document.onDOMNodeInserted //在一个节点作为子节点被插入到另一个节点中时触发

document.onDOMNodeRemoved //在节点从其父节点中被移除时触发

document.onDOMNodeInsertedIntoDocument //在一个节点被直接插入文档或通过子树间接插入文档之后触发，不冒泡。这个事件在DOMNodeInserted之后触发

document.onDOMNodeRemovedFromDocument //在一个节点直接从文档中移除或通过子树简介从文档中移除之前触发，不冒泡。这个事件在DOMNodeRemoved之后触发






### 07.HTML5事件



window.oncontextmenu //通过鼠标右键可以调出上下文菜单，以便开发人员取消默认上下文菜单而提供自定义菜单。P388
	//document.oncontectmenu
	//element.oncontectmenu
	//属于鼠标事件，所以event对象中包含光标位置有关的信息
	//兼容DOM浏览器中使用event.preventDetalut()，ie中将event.returnValue的值设置为false。
	//通常使用该事件来显示自定义上下文菜单，使用onclick事件来处理程序来隐藏该菜单。

window.onbeforeunload //这个事件会在浏览器卸载页面前触发
	//为了显示弹出对话框，需要将event.returnValue的值设置为要显示给用户的字符串。


document.onDOMContentLoaded //在形成完整的DOM树之后就会触发，不理会图像、js文件、css文件或其他资源是否已经下载完毕。
	//可以为document或者window添加此事件。
	//这个事件始终会在load事件前触发。
	

readystatechange

pageshow

pagehide

hashchange






### 08.设备事件




window.onorientationchange

window.onMozOrientation

window.ondeviceorientation

window.ondevicemotion






### 09.触摸与手势事件




 内存和性能-事件委托

 内存和性能-移除事件处理程序

 模拟事件