/*
*
*
*
Object
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
Array
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
RegExp
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
Function
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
JSON
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
Date
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
Math
*
*
*
*/



/***************************************************************************************/



/*
*
*
*
Global 全局对象
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
*
*
*
*/
eval();
isFinite();
isNaN();

//转型函数-转换为数值
Number();
	Number("Hello world"); //NaN
	Number(""); //0
	Number(null); //0
	Number(undefined)l //NaN
	Number("000011"); //11
	Number(true); //1
parseInt(); //转换为数字时比Number()更常用
	parseInt("1234blue"); //1234
	parseInt(""); //NaN
	parseInt(null); //NaN
	parseInt(undefined); //NaN
	parseInt("0xA"); //10 十六进制
	parseInt(22.5); //22
	parseInt("22.5"); //22
	parseInt("070"); //56 八进制
	parseInt("70"); //70 十进制
	parseInt("123blue123"); //123
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
	String(value4)l //"undefined"
obj.toString();
	var num=10;
	num.toString(); //"10"
	num.toString(2); //"2" 转换为2进制字符串形式
	num.toString(8); //"12"
	num.toString(10); //"10"
	num.toString(16); //"a"

decodeURI();
decodeURIComponent();
encodeURI();
encodeURIComponent();

