
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

//Null


//Undefined


/*
*
*
*
Number
*
*
*
*/
Number.constructor;
Number.prototype;
//表示最大数、最小数
Number.MAX_VALUE;
Number.MIN_VALUE;
//非数值数字
Number.NaN;
//溢出时返回该值。负无穷大、正无穷大
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

//
Number.toString();
Number.valueOf();
Number.toLocaleString();
//把数字转换为字符串，结果的小数点后有指定的数字
Number.toFixed(num);
//把对象转换为指数计数法，传入参数确定小数位数。输出结果为字符串
Number.toExponential(num);
//把数字格式化为指定的长度。输出结果为字符串
Number.toPrecision(num);


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
valueOf();

//返回指定位置的字符，返回指定位置字符的Unicode编码
StringObject.charAt(index);
StringObject.charCodeAt(index);
//连接字符串
StringObject.concat("sting","sting",...,"string"); //使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
//从字符编码创建一个字符串
String.fromCharCode(numX,numX,...,numX);
//检索字符串，检索不到返回-1
StringObject.indexOf(searchvalue, fromindex); //从指定位置向后搜索
StringObject.lastIndexOf(searchvalue, fromindex); //从指定位置向前搜索
//正则表达式查询替换
StringObject.match(searchvalue|regexp); //返回匹配的字符串值，regexp有g则执行全局匹配
StringObject.replace(regexp|substr,replacement); //替换与正则表达式匹配的字符串，如果regexp不带g则只替换第一个字符串
StringObject.search(regexp); //检索与正则表达式匹配的值，返回匹配值的位置，search不执行全局匹配，总是返回第一个值的匹配位置。检索不到返回-1
//提取字符串的片段，并在新的字符串中返回被提取的部分
StringObject.slice();
//把字符串分割为字符串数组
StringObject.split();
//从起始索引好提取字符串中指定数目的字符
StringObject.substr();
//提取字符串中两个指定的索引号之间的字符
StringObject.substring();
//大小写转换
StringObject.toLocaleLowerCase();
StringObject.toLocaleUpperCase();
StringObject.toLowerCase();
StringObject.toUpperCase();



//Symbol(new in ECMAScript 6)


