/*
*
*
*
* Object
*
*
*
*/



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

arr.toString(); //
arr.toLocaleString(); //
arr.valueOf(); //

arr.concat(); //连接两个或更多的数组，并返回结果
arr.join(); //把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分割

arr.push(new1,new2...); //数组末尾插入一个元素，返回新数组长度
arr.pop(); //数组末尾删除一个元素，返回删除的元素
arr.unshift(new1,new2...); //数组开头插入一个元素，返回新数组长度
arr.shift(); //数字开头删除一个元素，返回删除的元素

arr.reverse(); //颠倒数组中元素的顺序，返回颠倒后的数组
arr.sort(func); //？对数组的元素进行排序

arr.slice(start, end); //？从某个已有的数组，返回特定的元素
arr.splice(index, howmany,item1,...,itemX); //？删除元素，并向数组插入新元素，返回由被删除的元素组成的数组，并改变原数组



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

regexp.global; //RegExp对象是否有标志g
regexp.ignoreCase; //RegExp对象是否有标志i
regexp.multiline; //RegExp对象是否具有标志m

regexp.lastIndex; //一个整数，标示开始下一次匹配的字符位置
regexp.source; //正则表达式原文本。

regexp.compile(); //编译正则表达式
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

date.constructor;
Date.prototype;

Date(); //返回当日的日期和时间
Date.parse(); //返回1970年1月1日午夜到指定日期的毫秒数
Date.UTC(year,month,day,hours,minutes,seconds,ms); //根据世界时间返回1970年1月1日到指定日期的毫秒数

date.toString(); //把date转换为字符串
date.toLocaleString(); //根据本地格式把date转换为字符串
date.valueOf(); //返回date对象的原始值

date.getTime(); // 返回1970年1月1日至今的毫秒数
date.setTime(); // 以毫秒设置Date对象
date.getTimezoneOffset(); //返回本地时间与格林威治标准时间 (GMT) 的分钟差。

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
date.getUTCMilliseconds(); //

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

date.toTimeString(); //把 Date 对象的时间部分转换为字符串。
date.toDateString(); //把 Date 对象的日期部分转换为字符串。
date.toLocaleTimeString(); //根据本地时间格式，把 Date 对象的时间部分转换为字符串。
date.toLocaleDateString(); //根据本地时间格式，把 Date 对象的日期部分转换为字符串。
date.toGMTString(); //使用toUTCString()方法代替
date.toUTCString();  //根据世界时，把 Date 对象转换为字符串。




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

Math.E; //返回算数常量2，即自然对数的底数（约等于2.718）
Math.LN2; //返回2的自然对数（约等于0.693）
Math.LN10; //返回10的自然对数，与等于2.302
Math.LOG2E; //返回以2为底数的2的对数，约等于1.414
Math.LOG10E; //返回以10为底数的e的对数，约等于0.434
Math.PI; //返回圆周率，约等于3.1415
Math.SQRT1_2; //返回2的平方根的倒数，约等于0.707
Math.SQRT2; //返回2的平方根，约等于1.414


Math.toSource();
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

