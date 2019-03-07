//JavaScript-the-Good-Parts



//工厂模式
function createPerson( name, age, job ) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert( this.name );
	};
	return o;
}
var person1 = createPerson( "Nicholas", 29, "Software Engineer" );
var person2 = createPerson( "Gerg", 27, "Doctor" );



//构造函数模式
function Person( name, age, job ) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		alert( this.name );
	};
}
var person1 = new Person( "Nicholas", 29, "Software Enginner" );
var person2 = new Person( "Gerg", 27, "Doctor" );

var person3 = new Object();
Person.call( person3, "Jim", 30, "teacher" );



//原型模式
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
	alert( this.name );
};

var person1 = new Person();
person1.sayName(); //"Nicholas"

var person2 = new Person();
person2.sayName(); //"Nicholas"

alert( person1.sayName == person2.sayName ); //true



//组合使用构造函数模式和原型模式
function Person( name, age, job ){
	this.name = name;
	this.age = age;
	this.job = job;
	this.friend = [ "Shelby", "Court" ];
}

Person.prototype = {
	constructor: Person,
	sayName: function(){
		alert( this.name );
	}
}

var person1 = new Person( "Nicholas", 29, "Software Engineer" );
var person2 = new Person( "Greg", 27, "Doctor" );

person1.friend.push("Van");
alert( person1.friends ); //"shelby, Count, Van"
alert( person2.friends ); //"shelby, Count"
alert( persoon1.friends === person2.friends ); //false
alert( person1.sayName === person2.sayName ); //true



//
( element == "ab" ) && ( array[ index ] = "**" ); // 等价于 if ( element == "ab" ) array[ index ] = "**"



//递归遍历数组，并返回一个反向的数组字符串
var reverseArray = function( arr, indx, str ) {
	return indx == 0 ? str : reverseArray( arr, --indx, ( str += " " + arr[ indx ] ) ); //注意--号在indx前面，在带入arr[indx]时，indx已经被减1了。
};
var arr = [ "apple", "orange", "peach", "lime" ];
reverseArray( arr, arr.length, "" ); //返回" lime peach orange apple"



//递归--斐波那契数列，一个斐波那契数是前两个斐波那契数之和：
	// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
	var fibonacci = function ( n ) {
		return n < 2 ? n : fibonacci( n - 1 ) + fibonacci( n - 2 );
	}
	//不操作负值

//递归--阶乘，是从1到给定数字n的所有整数的乘积：
	// 4! = 4 * 3 * 2 * 1 = 24
	factorial ( n ) {
		return n == 1 ? 1 : n * factorial( n - 1 );
	}
	//不操作负值，负数是不能求阶乘的




//



