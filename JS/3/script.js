var a=123;
a=a.toString();/* 调用a的tostring方法 ，不适用null和undefined*/
console.log(typeof a);
console.log(a);

var b=333;
b=String(b);
console.log(typeof b);

var c=null;
c=String(c);
console.log(typeof c);
console.log(c);

var d="789";
d=Number(d);
console.log(d);
console.log(typeof d);

var e="sdcc";
e=Number(e);
console.log(typeof e);

var f="";
f=Number(f);
console.log(f);

var g=true;
g=Number(g);
console.log(g);

var h=null;
h=Number(h);
console.log(h);

var i=undefined;
i=Number(i);
console.log(i);

var j="123g456";
j=parseInt(j);/* 对非string，先转换成string再操作 */
console.log(j);

var k="124.54ff45";
k=parseFloat(k);
console.log(k);