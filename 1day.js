var x = 5;
var y = 3;
var z = x + y;
console.log("x와 y의 합은:", z); //1번

var x = 10; 
var y = 5;
var z = x - y;
console.log("x와 y의 차는:", z);//2번

var x = 2;
var y = 5;
var z = x * y;
console.log("x와 y의 곱은:", z);//3번

var x = 5;
var y = 2; 
var z = x / y;
console.log("x를 y로 나눈값은:", z);//4번

var x = 15;
var y = 2;
var z = x % y;
console.log("x를 y로 나눈 나머지값은:", z);//5번

var x = 5;
var y = ++x;
console.log("x의 값:", x);
console.log("y의 값:", y); // 6번

var x = 5;
var y = --x;
console.log("y의 값:", y);//7번

var str1 = "자바스크립트";
var str2 = "첫 번째 실습";
var str3 = str1 + "  " + str2;
console.log("연결된 문자열:", str3);//8번

var x = "Hello";
var y = 123;
var z = x + y;
console.log("연결결과는:", z);//9번

var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lenthg1 = str1.length;
console.log("결과는:", lenthg1);//10번

var str1 = "Hello, java";
var str2 = "script";

str1 = str1.replace("java", "JavaScript");

console.log("변경된 str1:", str1);//11번

console.log("hello, javascript!".toUpperCase());//12번

console.log("HELLO, JAVASCRIPT!".toLowerCase());//12번

var every = "a,b,c,d,e,f";
var sub = every.split("");
console.log(sub[2]);//13번











