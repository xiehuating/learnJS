/*
*
*
*
Null
*
*
*
*/





/*
*
*
*
Undefined
*
*
*
*/





/*
*
*
*
Boolean
*
*
*
*/
Boolean.constructor;
Boolean.prototype;

Boolean.toString();
Boolean.valueOf();
// 返回该对象源码
Boolean.toSource();





/*
*
*
*
Number
*
*
*
*/
num.constructor;
num.prototype;
//表示最大数、最小数
num.MAX_VALUE;
num.MIN_VALUE;
//非数值数字
num.NaN;
//溢出时返回该值。负无穷大、正无穷大
num.NEGATIVE_INFINITY;
num.POSITIVE_INFINITY;

//
num.toString();
num.valueOf();
num.toLocaleString();

num.toFixed(); //按照指定的小叔返回数值的字符串表示
	var num=10.005;
	num.toFixed(2); //"10.01"
num.toExponential(); //该方法返回以指数表示法表示的数值的字符串形式
	var4 num=10;
	num.toExponential(1) //"1.0e+1"
num.toPrecision(num); //能够得到某个最适合的数字格式的字符串表达
	var num=99;
	num.toPrecision(1); //"1e+2" 接收的参数表示所有数字的位数（不包括指数）
	num.toPrecision(2); //"99"
	num.toPrecision(3); //"99.0"





/*
*
*
*
String
*
*
*/

//字符串属性
String.Constructor;
String.length;
String.prototype;

toString();
toLocaleString();
valueOf();

//返回指定位置的字符，返回指定位置字符的Unicode编码
str.charAt(index);
str.charCodeAt(index);

//字符串操作
str.concat("sting","sting",...,"string"); //使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。

str.slice(); //提取字符串的片段，并在新的字符串中返回被提取的部分

str.substr(); //从起始索引好提取字符串中指定数目的字符

str.substring(); //提取字符串中两个指定的索引号之间的字符

str.trim(); //删除字符串前置和后缀的所有空格

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





//Symbol(new in ECMAScript 6)


