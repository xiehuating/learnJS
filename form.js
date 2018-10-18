// Form script

//获取页面中所有表单
document.forms
document.forms[0];
document.forms["form2"]

//提交表单
// 1.<input type="submit" value="Submit Form">
// 2.<button type="submit">Submit Form</button>
// 3.<input type="image" src="graphic.gif">
// 4.document.getElementById("myForm").submit()
// 以编程方式的submit()方式提交不会触发submit事件
// 提交表单出现最大问题是用户重复提交

//重置表单
// 1.<input type="reset" value="Reset Form">
// 2.<button type="reset">Reset Form</button>
// 3.document.getElementById("myForm").reset();
// 以编程方式reset()会像单机重置按钮一样触发reset事件


form.acceptCharset
form.action
form.elements
	form.elements[0]; //与form[0]访问到的元素相同，建议使用form.elements
	form.elements["textbox1"]; //与form["textbox1"]访问到的元素相同，建议使用form.elements
	form.elements.length;
form.enctype
form.length
form.method
form.name
form.target
form.reset()
form.submit()





//共有的表单字段属性，动态修改表字段属性
var field = document.getElementById("myForm").elements[0];
field.disabled
field.form
field.name
field.readOnly
field.tebIndex
field.type
field.value

//共有的表单字段方法
field.focus(); 
	// <input type="text" autofocus> 页面加载后，自动获得焦点
field.blur();


//共有的表单字段事件
field.addEventListener("focus", func, false);
field.addEventListener("blur", func, false);
field.addEventListener("change", func, false);
	//在对于input和textarea，获得焦点、失去焦点、value值改变都会触发change事件
	//对于select，用户选择不同选项就会触发change事件


//文本框
<input type="text" size="25" maxLength="50" value="initial value">
	//单行文本框、显示25个字符、最多输入50个字符
<textarea rows="25" cols="5">initial value<textarea>
//使用value属性读取或设置文本框的值，不要使用setAttribute()方法或修改textarea的第一个子节点。因为value属性的修改不一定反应在DOM中

textbox.select();
	//选择文本框文本
textbox.addEventListener("select", func, false);
	//用户选择文本（要释放鼠标）触发select事件

textbox.selectionStart  //文本选取开头偏移量
textbox.selectionEnd  //文本选取结尾偏移量
	textbox.value.substring(textbox.selectionStart,textbox.selectionEnd);

textbox.setSelectionRange(start, end);


//屏蔽非数字字符输入
EventUtil.addHandler(textbox, "keypress", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var charCode = EventUtil.getCharCode(event);
    
    if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey){
        EventUtil.preventDefault(event);
    }
    
});

//操作剪切板
//事件
textbox.addEventListener("beforecopy", func, false);
textbox.addEventListener("copy", func, false);
textbox.addEventListener("beforecut", func, false);
textbox.addEventListener("cut", func, false);
textbox.addEventListener("beforepaste", func, false);
textbox.addEventListener("paste", func, false);

//clipboardDate对象
var clipboardData = event.clipboardDate || window.clipboardDate
clipboardDate.getData();
clipboardDate.setData();
clipboardDate.clearData();


//自动验证
<input type="text" name="username" required>
	var isUsernameRequired = document.forms[0].elements["username"].required; //检查username是否为必填字段
	var isRequiredSupported = "required" in document.createElement("input"); //测试浏览器是否支持required属性

//特定类型浏览器验证
<input type="email" name="email">
<input type="utl" name="homepage">

//数值范围
<input type="number" min="0" max="100" step="5" name="count">

//输入模式
<input type="text" pattern="\d+" name="count">
	var pattern = document.forms[0].elements["count"].pattern;
	var isPatternSupported = "pattern" in document.createElement("input");

//检测有效性
if (document.forms[0].elements[0].checkValidity()){

};
if (document.forms[0].checkValidity()){

};

input.validity.customError;
input.validity.patternMismatch;
input.validity.rangeOverflow;
input.validity.rangeUnderflow;
input.validity.stepMisMatch;
input.validity.tooLong;
input.validity.typeMismatch;
input.validity.valid;
input.validity.valueMissing;

//禁用验证
<form method="post" action="signup.php" novalidate>
	document.forms[0].noValidate = "true";
	

//选择框脚本<select>, <option>
//select对象属性方法
select.add(newOption,relOption);
select.multiple;
select.options;
select.remove(index);
select.selectedIndex;
select.size;
//option对象属性
option.index;
option.lable;
option.selected;
option.text;
option.value;

	//用常规的DOM功能访问效率较低，推荐使用form专用的属性方法访问。
	var selectbox = document.forms[0].elements["location"];
	//不推荐
	var text = selectbox.option[0].firstChild.nodeValue;
	var value = selectbox.option[0].getAttribute("value");
	//推荐
	var text = selectbox.option[0].text;
	var text = selectbox.option[0].value;

//选择选项
selectbox.selectedIndex
	var selectedOption = selectbox.option[selectbox.selectedIndex]; 
	//对于只允许选择一项的选择框，可以使用选择框的selectedIndex属性选中
	//对于只多选选择框，设置selectedIndex会导致取消以前的所有选项并选择指定的那一项，读取selectedIndex则只会返回选中项中的第一项
	selectbox.options[0].selected = true;
	//设置第一个option为选中项，单选选择框会取消其他已选项选择。



//添加选项
//方法1，DOM常规方式
var newOption = document.createElement("option");
newOption.appendChild(document.createTextNode("Option text"));
newOptioin.setAttribute("value", "Option value");
selectbox.appendChild(newOption);

//方法2, 使用Option构造函数
var newOption = new Option("Option text", "Option value");
selectBox.appendChild(newOption); //在ie8及之前的版本中有问题

//方法3，使用选择框的add()方法，最佳方案
var newOption = new Option("Option text", "Option value");
selectBox.add(newOption, undefined);  //第二个参数为undefined，新选项插入到列表最后

//移除选项
//方法1，DOM的removerChild()
selectbox.removeChild(selectbox.option[0]); //移除第一项

//方法2，使用选择框的remove()方法
selectbox.remove(0); //移除第一项

//方法3，将相应选项设置为null
selectbox.option[0] = null //移除第一项



//移动和重排选项
//移动选项使用appendChild(),DOM appendChild()方法传入一个文档中已有元素，那么会从该元素父节点中自动移除它，再把它添加到指定位置。
var selectbox1 = document.getElementById("selLocations1");
var selectbox2 = document.getElementById("selLocations2");
selectbox2.appendChild(selectbox1.option[0]);

//重排选项使用insertBefore(),
var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index - 1]); //在选项框中向前移动一个选项的位置

var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index + 2]); //在选项框中向后移动一个选项的位置































