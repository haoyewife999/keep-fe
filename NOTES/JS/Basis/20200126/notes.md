## arguments
类数组对象，调用函数时传递的实参在此中保存

## Date（构造函数）
```js
var d=new Date;//当前代码执行时间
```
名称|功能
---|---
getDate()|获取几号
getDay()|获取星期几（周日为0）
getMonth()|获取几月（减一，从零开始）
getFullYear()|获取哪年
getTime()|**时间戳:**从格林威治标准时间（1970年）到现在的毫秒数
        
获取时间戳
```js
var start=Date.now();
```
## Math（非构造函数）
名称|功能
---|---
 PI|圆周率
 abs()|绝对值
 ceil()|上舍入
 floor()|下舍入
 round()|四舍五入
 random()|生成0~1之间随机数
 max()|取最大值
 min()|取最小值
 pow(x,y)|x的y次方
sqrt(x)|对x开方

## string
* 字符串以字符数组的形式保存    
```js
        var str='1dhgs4dfhg';
        console.log(str[3]);//g
```
* charAt()
```js
        var str='1dhgs4dfhg';
        console.log(str.charAt(3));
```
* charCodeAt()
获取指定位置的Unicode编码
* String.fromCharCode()
```js
console.log(String.fromCharCode(72));//H
//H的unicod编码是72
```
* concat(str1,str2)
连接字符串
* indexOf()
   * 检查字符串中是否含有指定内容
   * 返回索引或-1
   ```js
        var str='1dhgs4dfhg';
        console.log(str.indexOf('h'));//2
   ```
   * 第二个参数可以指定开始查找的位置
   ```js
        var str='1dhgs4dfhg';
        console.log(str.indexOf('h',4));//8
   ```
   ```js
        var str='1dhgs4dfhg';
        console.log(str.indexOf('h',9));//-1
   ```
   * lastIndexOf()往前找
* slice()

  截取指定位置，不影响原字符串
* subString()
  * 用途同slice，不能接收负值，转变为0
  * 如果第二个参数小于第一个，自动转换位置
  ```js
        var str='1dhgs4dfhg';
        console.log(str.substring(4,-1));//1dhg
  ```
* substr()
  指定截取的开始位置和长度
  ```js
        var str='1dhgs4dfhg';
        console.log(str.substr(4,1));//s    
  ```
* split()
按一个字符拆分数组，或逐个拆分
* toUpperCase()

  转换为大写
* toLowerCase()
    
  转换为小写

## 正则表达式
* 检查字符串中是否含有某字符

  第二个参数
  * i：忽略大小写
  * g：全局匹配模式
  ```js
        var reg=/a/i;
        console.log(reg.test('Abc'));//true    
  ```
* ```js
        var reg=/a|b/;//a或b
        var reg=/[A-z]/;//[]也表示或，查找任意字母
        var reg= /[^ab]/;//查找不在[]内的字符
        console.log(reg.test('abc'));//true
   ```
* 量词
  ```js
  var reg=/a{3}/;
  var reg=/ab{1,3}/ //1~3次
  var reg=/ab+c/ //至少一个b
  var reg=/ab*c/ //0或多个b
  var reg=/ab?c/ //0或1个b
  var reg=/[A-z0-9]/ //任意字母数字
  ```
* 开头
  ```js
  var reg=/^a/ //^表示开头，即以a开头
  var reg=/a$/ //$表示结尾，即以a结尾
  
  ```
* 转义字符
  * . 表示任意字符
  ```js
      var reg=/\./;
      var reg=new RegExp('\\.');
      console.log(reg); // /\./
      //因为字符串中/是转义字符
  ```
  名称|功能
  ---|--
  \w|任意字母、数字、下划线
  \W|除了字母、数字、下划线
  \d|任意数字
  \D|除了数字
  \s|空格
  \S|除了空格
  \b|单词边界
  \B|除了单词边界
  ```js
  var reg=/\bchild\b/;
  console.log(reg.test('children'));//false
  ```
  ```js
  var str='   chi  ld  ';
  console.log(str.replace(/^\s+|\s+$/g,''));//去开头和结尾的空格
  ```
* String的正则表达式方法
  * split()

    不用设置g
  ```js
        var str='1f2h3n5b6j3b';
        console.log(str.split(/[A-z]/));
  ```
  * search()
    
    检索并返回索引,设置g也没用
  ```js
        var str='adc';
        console.log(str.search(/a[bcd]c/));//0
  ```
  * match()

    将符合条件的内容提取出来封装在一个数组里，需加g
  ```js
  var str='adcA1247gSdja';
  console.log(str.match(/[a-z]/gi));
  ```
  * replace()

    替换，需加g
  ```js
  var str='adcA1247gSdja';
  console.log(str.replace(/[a-z]/gi,''));
  ```
## DOM
* document object model
* Node 节点
  * 文档节点：document，整个HTML文档
  * 元素节点
  * 属性节点
  * 文本节点：nodeValue为文本内容
* 事件
* 文档的加载

  为使页面加载完后执行js代码
  ```js
  window.onload=function(){
      //jsCode
  };

## 其他
* 包装类

        当调用基本数据类型的属性和方法时，浏览器临时使用包装类将其转换为对象，调用完将其转换为基本数据类型
* 