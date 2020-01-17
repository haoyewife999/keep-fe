var a = 0x10;
console.log(a);

var b = 010;
console.log(b);

var c = 0b10;
console.log(c);

var d = "070";
d = parseInt(d, 8);/* 传递的第二个参数指定进制 */
console.log(d);

var e = 4758;
e = Boolean(e);
console.log(e);

var f = null;
f = Boolean(f);
console.log(f);

var g = "";
g = Boolean(g);
console.log(g);

var h = "dhfdj";
h = Boolean(h);
console.log(h);

var i = undefined;
i = Boolean(i);
console.log(i);

var j = 123;
console.log(typeof typeof j);/* typeof返回值类型为字符串 */

var result = true + 1;/* 非数字先转化为number类型，除字符串 */
console.log(result);

var k = NaN + 8;
console.log(k);/* NaN */

var l = "你好" + "JS";
console.log(l);/* 拼串 */

var m="768"+87;
console.log(m);/* 任何值和字符串相加，先转化为字符串，再拼串 */

var n=376+"";
console.log(typeof n);/* 利用上一条特点，隐式类型转换成字符串 */

var o=100;
console.log("o="+o);

var p=1+3+"453";
console.log("p="+p);/* 从左往右算 */

var q=1+"2"+3;
console.log("q="+q);

var r=100-"45";
console.log(r);/* 字符串转化为number */

var s=100-"fh23dj";
console.log(s);

var t=100-null;
console.log(t);

var u=3*"5";
console.log("u="+u);/* 乘除同减 */

var v="666"-0;
console.log("v="+v);/* 隐式类型转换 */

var w=9%5;
console.log("w="+w);/* 取模？ */

var x=22;
x+=20;
console.log("x="+x);

var y=true;
y=-y;
console.log(y);/* 先转换为number */

var z="87";
z=+z;
console.log(z);
console.log(typeof z);/* 更简单的隐式类型转换 */