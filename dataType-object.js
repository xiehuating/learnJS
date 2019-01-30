/*
*
*
*
* Object
*
*
*
*/

Object.prototype;


Object.assign(target, source) //通过复制一个或多个对象来创建一个新的对象。
Object.create(obj); //使用指定的原型对象和属性创建一个新对象。

Object.defineProperties(obj, props); //?
Object.defineProperty(obj, prop, descriptor); //?

Object.getOwnPropertyDescriptor(obj,prop); //?
Object.getOwnPropertyDescriptors(obj); //ie不支持

Object.keys(obj); //返回一个包含所有给定对象自身可枚举属性名称的数组。
Object.getOwnPropertyNames(obj)； //返回一个包含所有给定对象自身可枚举或不可枚举的属性名称的数组。

Object.values(obj);

Object.getPrototypeOf(obj); // Object.getPrototypeOf(person1) == Person.prototype; 返回true

Object.freeze(obj);
Object.seal(obj);

Object.isFrozen(obj);
Object.isSealed(obj);

obj.constructor;

obj.hasOwnProperty(prop);
obj.isPrototypeOf(obj); //Person.prototype.isPrototypeOf(person1); 返回true
obj.propertyIsEnumerable(prop);

obj.toLocaleString();
obj.toString();
obj.valueOf();



/***************************************************************************************/



/*
*
*
*
* Array
*
*
*
*/

arr.constructor;
Array.prototype;
arr.length;
	var colors = ["red","blue","green"];
	colors[colors.length] = "black"; //["red", "blue", "green", "black"]
	colors[colors.length] = "brown"; //["red", "blue", "green", "black", "brown"]

//转换方法
arr.toString(); //返回逗号拼接的字符串
arr.toLocaleString(); //返回逗号拼接的字符串
arr.valueOf(); //返回数组
arr.join(); //返回字符串，元素通过指定的分隔符进行分割
	var colors = ["red", "green", "blue"];
	alert( colors.join(",") ); //"red,green,blue"
	alert( colors.join("||") ); //"red||green||blue"

//栈方法&队列方法
arr.push(new1,new2...); //数组末尾插入元素，返回新数组长度，原数组被更新
arr.pop(); //数组末尾删除一个元素，返回删除的元素，原数组被更新
arr.unshift(new1,new2...); //数组开头插入元素，返回新数组长度，原数组被更新
arr.shift(); //数字开头删除一个元素，返回删除的元素，原数组被更新

//重排序方法
arr.reverse(); //颠倒数组中元素的顺序，返回颠倒后的数组，原数组被更新
	var values = [1,2,3,4,5];
	values.reverse(); //[5,4,3,2,1];
arr.sort([compareFunction]); //按升序排列数组项，返回重新排序后的数组，原数组被更新
	//如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。
	//要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较
	var values = [0,1,5,10,15];
	values.sort(); // [1,1,10,15,5];

	//如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。
	//比较函数应该具有两个参数 a 和 b，其返回值如下：
	//	若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
	//	若 a 等于 b，则返回 0。
	//	若 a 大于 b，则返回一个大于 0 的值。
	//升序
		function compare(value1, value2){
			if ( value1 < value2 ) {
				return -1;
			} else if ( value1 > value2 ) {
				return 1;
			} else {
				return 0;
			}
		}
		var values = [0,1,5,10,15];
		values.sort(compare);
		alert(values); //[0,1,5,10,15];
	//降序
		function compare(value1, value2){
			if (value1 < value2) {
				return 1;
			} else if (value1 > value2) {
				return -1;
			} else {
				return 0;
			}
		}
		var values = [0,1,5,10,15];
		values.sort(compare);
		alert(values); //[15,10,5,1,0];
	//对于数值类型可以使用更简单的函数
		function compare(value1, value2) {
			return value2 - value1;
		}

//操作方法
arr.concat(); //连接两个或更多的数组，并返回结果，不改变原数组
	var colors = ["red","green","blue"];
	var colors2 = colors.concat("yellow", ["black", "brown"]);
	alert(colors); //["red","green","blue"]
	alert(colors2); //["red","green","blue","yellow","black", "brown"]
arr.slice(start, end); //基于当前数组中的一个或多个项创建新数组，不改变原数组，返回新数组
	var colors = ["red","green","blue","yellow","purple"];
	var colors2 = colors.slice(1);
	var colors3 = colors.slice(1,4);
	alert(colors2); //["green","blue","yellow","purple"]
	alert(colors3); //["green","blue","yellow"]
arr.splice(index, howmany, item1,...,itemX); //删除元素，并向数组插入新元素，返回由被删除的元素组成的数组，并改变原数组，返回新数组
	//删除
		var colors = ["red","green","blue"];
		var removed = colors.splice(0,1);
		alert(colors); //["green","blue"]
		alert(removerd); //["red"]
	//从位置1开始插入2项
		removed = colors.splice(1, 0, "yellow", "orange");
		alert(colors); //["green","yellow", "orange","blue"]
		alert(removed);//[]返回空数组
	//插入2项，删除1项
		removed = colors.splice(1, 1, "red", "purple");
		alert(colors); //["green", "red", "purple", "orange","blue"]
		alert(removed); //["yellow"]

//位置方法
arr.indexOf();
arr.lastIndexOf();
	var numbers = [1,2,3,4,5,4,3,2,1];
	alert(numbers.indexOf(4)); //3
	alert(numbers.lastIndexOf(4)); //5
	alert(numbers.indexOf(4,4)); //5
	alert(numbers.lastIndexOf(4,4)); //3

	var person = {name:"Nicholas"};
	var people = [{name:"Nicholas"}];
	var morePeople = [person];
	alert(people.indexOf(person)); //-1
	alert(morePeople.indexOf(person)); //0

//迭代方法
arr.every(func); //对数组中每一项运行给定函数，如果每一项返回true，则返回true
arr.some(func); //对数组中每一项运行给定函数，如果任一项返回true，则返回true
arr.filter(func); //对数组中每一项运行给定函数，返回该函数返回true的项组成的数组。重要
arr.map(func); //对数组中每一项运行给定函数，返回每次调用结果组成的数组（true、false组成的数组）
arr.forEach(func); //对数组中每一项运行给定函数，没有返回值，本质上和for循环迭代数组一样
//func会接收三个参数：
// item，数组项的值
// index，该项在数组中的位置
// array，数组对象本身
	var numbers = [1,2,3,4,5,4,3,2,1];
	var everyResult = numbers.every(function(item,index,array){
		return (item > 2);
	});
	alert(everyResult); //false

	var someResult = numbers.some(function(item,index,array){
		return (item > 2);
	})
	alert(someResult); //true

	var numbers = [1,2,3,4,5,4,3,2,1];
	var filterResult = numbers.filter(function(item,index,array){
		return (item > 2);
	})
	alert(filterResult); // [3,4,5,4,3]

	var numbers = [1,2,3,4,5,4,3,2,1];
	var mapResult = numbers.map(function(item, index, array){
		return item*2;
	})
	alert(mapResult); //[2,4,6,8,10,8,6,4,2]

	var numbers = [1,2,3,4,5,4,3,2,1];
	numbers.forEach(functionn(item,index,array){
		//执行某些操作
	})


//归并方法，ES5新增
arr.reduce(func, defalutvalue); //从数组第一个项开始，逐个遍历到最后
arr.reduceRight(func, defalutvalue); //从数组的最后一个项开始，向前遍历到第一项
//func接收4个参数：
//	prev，前一个值
//	cur，当前值
//	index，项索引
//	array，数组对象
//defaultvalue作为归并基础的初始值
	var values = [1,2,3,4,5];
	var sum = values.reduce(function(prev,cur,index,array){
		return prev + cur;
	})
	alert(sum); //15

	var values = [1,2,3,4,5];
	var sum = values.reduceRight(function(prev,cur,index,array){
		return prev + cur;
	})
	alert(sum); //15


//检测数组
instanceof
	arr instanceof Array //true
	arr instanceof Object //true
	
Array.isArray();
	Array.isArray(arr); //true

/***************************************************************************************/



/*
*
*
*
* RegExp
*
*
*
*/

RegExp.prototype;

regexp.global; //RegExp对象是否有标志g
regexp.ignoreCase; //RegExp对象是否有标志i
regexp.multiline; //RegExp对象是否具有标志m

regexp.lastIndex; //一个整数，标示开始下一次匹配的字符位置
regexp.source; //正则表达式原文本。

regexp.toString();

regexp.compile(); //编译正则表达式，已废弃
regexp.exec(); //检索字符串中指定的值。返回找到的值，并确定其位置
regexp.test(); //检索字符创中指定的值。返回true或false。



/***************************************************************************************/



/*
*
*
*
* Function
*
*
*
*/
Function.prototype;

func.arguments; //function.arguments 已经被废弃了, 现在推荐的做法是使用函数内部可用的 arguments 对象来访问函数的实参。
func.caller; //该特性是非标准的，请尽量不要在生产环境中使用它！
func.length; //函数形参的个数
func.name;

func.toString();

func.apply();
func.call();
func.bind();

//函数内部两个特殊的对象：arguments，this
arguments //数组对象，包含传入函数中的所有参数
arguments.callee(); //是一个指向正在执行的函数指针，可以实现对函数递归的调用
	function factorial(num) {
		if (num <= 1) {
			return 1;
		} else {
			return num * arguments.callee( num-1 ) ;
		}
	}
	alert( factorial(5) ); //120
func.caller； //这个属性中保存着调用当前函数的函数的引用。
	function outer() {
		inner();
	}
	function inner() {
		alert (inner.caller); //为了实现更松散的耦合，可以使用arguments.callee.caller
	}
	outer(); //返回out函数的源代码

arguments.caller; //该属性已经不可使用了，请使用func.caller
arguments.length;




/***************************************************************************************/


/*
*
*
*
* Date
*
*
*
*/

Date.prototype;

Date(); //返回当日的日期和时间
Date.now(); //返回表示调用这个方法时的日期和时间的毫秒数
Date.parse(); //接收一个表示日期的字符串参数，然后根据这个字符串返回相应日期的毫秒数，返回值为Number
Date.UTC(year,month,day,hours,minutes,seconds,ms); //根据世界时间返回1970年1月1日到指定日期的毫秒数,返回值为Number

date.constructor;

//继承的方法
date.toString(); //把date转换为字符串
date.toLocaleString(); //根据本地格式把date转换为字符串
date.valueOf(); //返回date对象的原始值

//日期格式化，与toString(),toLocaleString一样，输入格式因浏览器而异。
date.toDateString(); //把 Date 对象的日期部分转换为字符串。
date.toTimeString(); //把 Date 对象的时间部分转换为字符串。
date.toLocaleDateString(); //根据本地时间格式，把 Date 对象的日期部分转换为字符串。
date.toLocaleTimeString(); //根据本地时间格式，把 Date 对象的时间部分转换为字符串。
date.toUTCString();  //根据世界时，把 Date 对象转换为字符串。

//日期时间组件方法
date.getTime(); // 返回表示日期的毫秒数，与valueOf()方法返回值相同
date.setTime(); // 以毫秒设置日期，会改变整个日期

date.getDate(); //返回月中的某一天，1~31
date.getDay(); //返回周中的某一天，0~6
date.getMonth(); //返回月份，0~11
date.getFullYear(); //返回年份
date.getHours(); //返回小时，0~23
date.getMinutes(); //返回分钟，0~59
date.getSeconds(); //返回秒数，0~59
date.getMilliseconds(); //返回毫秒，0~999

date.getUTCDate(); //
date.getUTCDay(); //
date.getUTCMonth(); //
date.getUTCFullYear(); //
date.getUTCHours(); //
date.getUTCMinutes(); //
date.getUTCSeconds(); //
date.getUTCMilliseconds(); //注意S小写

date.setDate(); //设置Date对象月中的某一天，1~31
date.setMonth(); //设置Date对象的月份，0~11
date.setFullYear(); //设置Date对象的年份，四位数字
date.setHours(); //设置Date对象的小时，0~23
date.setMinutes(); //设置Date对象的分钟，0~59
date.setSeconds(); //设置Date对象的秒钟，0~59
date.setMilliseconds(); //设置Date对象的毫秒，0~999

date.setUTCDate(); //
date.setUTCMonth(); //
date.setUTCFullYear(); //
date.setUTCHours(); //
date.setUTCMinutes(); //
date.setUTCSeconds(); //
date.setUTCMilliseconds(); //

date.getTimezoneOffset(); //返回本地时间与UTC时间相差的分钟数。




/***************************************************************************************/



/*
*
*
*
* Math
*
*
*
*/

Math.E; //返回算数常量e，即自然对数的底数（约等于2.718）
Math.LN2; //返回2的自然对数（约等于0.693）
Math.LN10; //返回10的自然对数，与等于2.302
Math.LOG2E; //返回以2为底数的2的对数，约等于1.44
Math.LOG10E; //返回以10为底数的e的对数，约等于0.434
Math.PI; //返回圆周率，约等于3.1415
Math.SQRT1_2; //返回2的平方根的倒数，约等于0.707
Math.SQRT2; //返回2的平方根，约等于1.414


Math.toSource(); //还未被标准化
Math.valueOf();


Math.abs(x); //返回数的绝对值

Math.cos(x); //返回数的余弦值
Math.sin(x); //返回数的正弦值
Math.tan(x); //返回角的正切
Math.acos(x); //？返回数的反余弦值
Math.asin(x); //？返回数的反正弦值
Math.atan(x); //？以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
Math.atan2(y,x); //？返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。

Math.round(x); //把数四舍五入为最接近的整数。
Math.ceil(x); //把数进行上舍入
Math.floor(x); //把数进行下舍入

Math.sqrt(x); //返回数的平方根
Math.pow(x,y); //返回x的y次幂
Math.exp(x); //？返回e的指数
Math.log(x); //？返回数的自然对数（底为e）

Math.max(x,y); //返回x和y中的最高值
Math.min(x,y); //返回x和y中的最低值

Math.random(); //返回0~1的随机数








/***************************************************************************************/



/*
*
*
*
* Global 全局对象
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
*
*
*
*/

undefined
NaN
Infinity

encodeURI();
encodeURIComponent();



eval();
isFinite();
isNaN();

//转型函数-转换为数值
Number();
	Number("000011"); //11
	Number("1234blue"); //NaN
	Number("Hello world"); //NaN
	Number(""); //0
	Number(null); //0
	Number(undefined); //NaN
	Number(true); //1
	Number(false); //0
parseInt(); //转换为数字时比Number()更常用
	parseInt(22.5); //22
	parseInt("22.5"); //22
	parseInt("1234blue"); //1234
	parseInt(""); //NaN
	parseInt(null); //NaN
	parseInt(undefined); //NaN
	parseInt(true); //NaN
	parseInt(false); //NaN
	parseInt("0xA"); //10 十六进制
	parseInt("070"); //56 八进制
	parseInt("70"); //70 十进制
	parseInt("10",2) //2 第一个参数为2进制，将第一个参数转换为10进制
	parseInt("10",8) //8
	parseInt("10",10) //10
	parseInt("10",16) //16
	parseInt("3.1415e7") //3
parseFloat(); //转换为数字时比Number()更常用
	parseFloat("1234blue"); //1234
	parseFloat("0xA"); //0
	parseFloat("22.5"); //22.5
	parseFloat("22.34.5"); //22.34
	parseFloat("0908.5"); //908.5
	parseFloat("3.1415e7"); //31415000

//转型函数-转换为字符串
String();
	String(10); //"10"
	String(true); //"true"
	String(null); //"null"
	String(undefined); //"undefined"
	String(value4); //"undefined"
obj.toString();
	var num=10;
	num.toString(); //"10"
	num.toString(2); //"1010"  转换为2进制字符串形式
	num.toString(8); //"12"
	num.toString(10); //"10"
	num.toString(16); //"a"

decodeURI();
decodeURIComponent();
encodeURI();
encodeURIComponent();

