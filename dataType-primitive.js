/*
*
*
Null
*
*
*/



/***************************************************************************************/



/*
*
*
Undefined
*
*
*/



/***************************************************************************************/



/*
*
*
Boolean
*
*
*/
bool.constructor;
Boolean.prototype;

bool.toString();
bool.valueOf();



/***************************************************************************************/



/*
*
*
Number
*
*
*/

num.constructor;
Number.prototype; //可以给Number构造函数设置prototype中的属性和方法
//表示最大数、最小数
Number.MAX_VALUE;
Number.MIN_VALUE;
//非数值数字，JS以NaN的形式输出Number.NaN
Number.NaN; 
//溢出时返回该值。负无穷大、正无穷大
Number.NEGATIVE_INFINITY; //-Infinity
Number.POSITIVE_INFINITY; //Infinity

//
num.toString();
num.valueOf();
num.toLocaleString();

num.toFixed(); //按照指定的小叔返回数值的字符串表示
	var num=10.005;
	num.toFixed(2); //"10.01"
num.toExponential(); //该方法返回以指数表示法表示的数值的字符串形式
	var num=10;
	num.toExponential(1) //"1.0e+1"
num.toPrecision(num); //能够得到某个最适合的数字格式的字符串表达
	var num=99;
	num.toPrecision(0); //argument must be between 1 and 100
	num.toPrecision(1); //"1e+2" 接收的参数表示所有数字的位数（不包括指数）
	num.toPrecision(2); //"99"
	num.toPrecision(3); //"99.0"



/***************************************************************************************/



/*
*
*
String
*
*
*/

//字符串属性
str.constructor;
str.length;
String.prototype; //可以给String构造函数设置prototype中的属性和方法

str.toString();
str.toLocaleString();
str.valueOf();

//返回指定位置的字符，返回指定位置字符的Unicode编码
str.charAt(index);
	var stringValue = "hello world";
	alert(stringValue.chatAt(1)); //"e"
	alert(stringValue[1]); //"e"

str.charCodeAt(index);
	var stringValue = "hello world";
	alert(stringValue.charCodeAt(1)); //"101",e字母的unicode编码

//字符串操作，对原始字符串不会有任何影响
str.concat("sting","sting",...,"string"); //使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
	var stringValue = "hello ";
	var result = stringValue.concat("world", "!");
	alert(result); //"hello world!"

str.slice(start, end); //提取字符串的片段，并在新的字符串中返回被提取的部分
	var stringValue = "hello world";
	alert( stringValue.slice(3) );  //"lo world"
	alert( stringValue.slice(3,7) );  //"lo w"
	alert( stringValue.slice(-3) );  //"rld", 第一个参数-3被转换为8
	alert( stringValue.slice(3, -4) );  //"lo w"，第二个参数-4被转换为7

str.substr(start, length); //从起始索引好提取字符串中指定数目的字符
	var stringValue = "hello world";
	alert( stringValue.substr(3) );  //"lo world"
	alert( stringValue.substr(3,7) );  //"lo worl"
	alert( stringValue.substr(-3) );  //"rld"，第一个参数-3被转换为8
	alert( stringValue.substr(3, -4) );  //""（空字符串），第二个参数-4被转换为0

str.substring(start, end); //提取字符串中两个指定的索引号之间的字符
	var stringValue = "hello world";
	alert( stringValue.substring(3) );  //"lo world"
	alert( stringValue.substring(3,7) );  //"lo w"
	alert( stringValue.substring(-3) );  //"hello world"，第一个参数-3被转换为0
	alert( stringValue.substring(3,-4) );  //"hel"，第二个参数-4被转换为0

str.trim(); //删除字符串前置和后缀的所有空格
	var stringValue = "   hello world   ";
	var trimmedStringValue = stringValue.trim();
	alert( trimmedStringValue ); //"hello world"

//字符串位置。检索字符串，检索不到返回-1
str.indexOf(searchvalue, fromindex); //从指定位置向后搜索
str.lastIndexOf(searchvalue, fromindex); //从指定位置向前搜索

//字符串正则表达式匹配方法。
str.match(searchvalue|regexp); //返回匹配的字符串值，regexp有g则执行全局匹配
str.replace(regexp|substr,replacement); //替换与正则表达式匹配的字符串，如果regexp不带g则只替换第一个字符串
str.search(regexp); //检索与正则表达式匹配的值，返回匹配值的位置，search不执行全局匹配，总是返回第一个值的匹配位置。检索不到返回-1
str.split();//把字符串分割为字符串数组

//字符串大小写转换
str.toLocaleLowerCase();
str.toLocaleUpperCase();
str.toLowerCase();
str.toUpperCase();

//比较字符串
str.localeCompare(str);


//从字符编码创建一个字符串
String.fromCharCode(numX,numX,...,numX);
	String.fromCharCode(97,98,99,100); //"abcd"


/***************************************************************************************/


/*
*
*
Symbol(new in ECMAScript 6)
*
*
*/





/***************************************************************************************/
