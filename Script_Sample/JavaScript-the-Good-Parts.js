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
