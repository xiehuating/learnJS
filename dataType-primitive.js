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

//字符方法
str.charAt(index);
	var stringValue = "hello world";
	alert(stringValue.chatAt(1)); //"e"
	alert(stringValue[1]); //"e"

str.charCodeAt(index);
	var stringValue = "hello world";
	alert(stringValue.charCodeAt(1)); //"101",e字母的unicode编码

//字符串操作方法
str.concat("sting","sting",...,"string"); //使用 " + " 运算符来进行字符串的连接运算通常会更简便一些。
	var stringValue = "hello ";
	var result = stringValue.concat("world", "!");
	alert(result); //"hello world!"

str.slice(start, end); //提取字符串的片段，并在新的字符串中返回被提取的部分，提取出的字符串包括start不包括end
	var stringValue = "hello world";
	alert( stringValue.slice(3) );  //"lo world"
	alert( stringValue.slice(3,7) );  //"lo w"
	alert( stringValue.slice(-3) );  //"rld", 第一个参数-3被转换为8
	alert( stringValue.slice(3,-4) );  //"lo w"，第二个参数-4被转换为7
	alert( stringValue.slice(-3,-4) );  //""（空字符串）
	alert( stringValue.slice(-3,-1) );  //"rl"

str.substr(start, length); //从起始索引好提取字符串中指定数目的字符
	var stringValue = "hello world";
	alert( stringValue.substr(3) );  //"lo world"
	alert( stringValue.substr(3,7) );  //"lo worl"
	alert( stringValue.substr(-3) );  //"rld"，第一个参数-3被转换为8
	alert( stringValue.substr(3, -4) );  //""（空字符串），第二个参数-4被转换为0
	alert( stringValue.substr(-3, -4) );  //""（空字符串）

str.substring(start, end); //提取字符串中两个指定的索引号之间的字符，提取出的字符串包括start不包括end
	var stringValue = "hello world";
	alert( stringValue.substring(3) );  //"lo world"
	alert( stringValue.substring(3,7) );  //"lo w"
	alert( stringValue.substring(-3) );  //"hello world"，第一个参数-3被转换为0
	alert( stringValue.substring(3,-4) );  //"hel"，第二个参数-4被转换为0
	alert( stringValue.substring(-3, -4) ); //""（空字符串）

str.trim(); //删除字符串前置和后缀的所有空格
	var stringValue = "   hello world   ";
	var trimmedStringValue = stringValue.trim();
	alert( trimmedStringValue ); //"hello world"

//字符串位置方法
str.indexOf(searchvalue, fromindex); //从指定位置向后搜索
str.lastIndexOf(searchvalue, fromindex); //从指定位置向前搜索
	var stringValue = "hello world";
	alert( stringValue.indexOf("o") ); //4
	alert( stringValue.lastIndexOf("o") ); //7
	alert( stringValue.indexOf("o", 6) ); //7
	alert( stringValue.indexOf("o", 6) ); //4

//字符串模糊匹配方法
str.match(searchvalue|regexp); //返回匹配的字符串值，regexp有g则执行全局匹配；此方法与调用RegExp的exec方法相同。
	var text = "cat, bat, sat, fat";
	var pattern = /.at/;
	var matches = text.match(pattern);
	alert( matches.index ); //0
	alert( matches[0] ); //"car"
	alert( pattern.lastIndex ); //0
	/*
	 *match() 方法将检索字符串 stringObject，以找到一个或多个与 regexp 匹配的文本。
	 *这个方法的行为在很大程度上有赖于 regexp 是否具有标志 g。
	 *
	 *如果 regexp 没有标志 g，那么 match() 方法就只能在 stringObject 中执行一次匹配。
	 *如果没有找到任何匹配的文本， match() 将返回 null。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息。
	 *该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。
	 *除了这些常规的数组元素之外，返回的数组还含有两个对象属性。
	 *index 属性声明的是匹配文本的起始字符在 stringObject 中的位置，input 属性声明的是对 stringObject 的引用。
	 *举例：text 上 match 匹配 /.at/ 返回结果["cat", index: 0, input: "cat, bat, sat, fat", groups: undefined]
	 *
	 *如果 regexp 具有标志 g，则 match() 方法将执行全局检索，找到 stringObject 中的所有匹配子字符串。
	 *若没有找到任何匹配的子串，则返回 null。如果找到了一个或多个匹配子串，则返回一个数组。
	 *不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 stringObject 中所有的匹配子串，
	 *而且也没有 index 属性或 input 属性。
	 *举例：text 上 match 匹配 /.at/g 返回结果["cat", "bat", "sat", "fat"]
	 *
	 *注意：在全局检索模式下，match() 即不提供与子表达式匹配的文本的信息，也不声明每个匹配子串的位置。
	 *如果您需要这些全局检索的信息，可以使用 RegExp.exec()。
	 */

str.replace(regexp|substr,replacement); //替换与正则表达式匹配的字符串，如果regexp不带g则只替换第一个字符串
	var text = "cat,bat,sat,fat";
	var result = text.replace("at","ond");
	alert(result); //"cond,bat,sat,fat";
	result = text.replace(/at/g, "ond");
	alert(result);//"cond,bond,sond,fond"
	// 第二个参数是字符串可以使用特殊的字符序列：$$, $&, $', $`, $n, $nn
	var text = "cat,bat,sat,fat";
	result = text.replace(/(.at)/g,"word ($1)");  
	alert(result); // world (cat), world (bat), world (sat), world (fat)
	// 第二个参数也可以是一个函数
	function htmlEscape(text){
        return text.replace(/[<>"&]/g, function(match, pos, originalText){
            switch(match){
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case "&":
                    return "&amp;";
                case "\"":
                    return "&quot;";
            }             
        });
    }    
    lert(htmlEscape("<p class=\"greeting\">Hello world!</p>")); //&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;

str.search(searchvalue|regexp); //检索与正则表达式匹配的值，返回匹配值的位置，search不执行全局匹配，总是返回第一个值的匹配位置。检索不到返回-1
	var text = "cat, bat, sat, fat";
	var pos = text.search(/at/);
	alert(pos); //1

str.split();//把字符串分割为字符串数组
	var colorText = "red,blue,green,yellow";
    var colors1 = colorText.split(",");      //["red", "blue", "green", "yellow"]
    var colors2 = colorText.split(",", 2);   //["red", "blue"]
    var colors3 = colorText.split(/[^\,]+/); //["", ",", ",", ",", ""]	

//字符串大小写转换方法
str.toLocaleLowerCase();
str.toLocaleUpperCase();
str.toLowerCase();
str.toUpperCase();

//比较字符串方法
str.localeCompare(str);


//从字符编码转换成字符串方法
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
