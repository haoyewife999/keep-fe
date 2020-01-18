## 作用域
* 全局作用域
  全局对象window，由浏览器创建

* 函数作用域

## 声明提前
* 变量的声明提前
    不会被赋值

* 函数的声明提前
    *  ```js
        function fun(){

        }
        ```
    
    可以提前调用
    *  ```js
       var fun2=function(){

        }
        ```
    不会声明提前

## 特殊
```js
       var a=10;
       function fun(){
           console.log(a);//undefined
           var a=20;
       }
       fun();
```
```js
       var a=10;
       function fun(){
           console.log(a);//10
           a=20;
       }
       fun();
```
```js
       var a=10;
       function fun(){
           console.log(a);
           a=20;
       }
       fun();
       console.log(a);//20
       //在函数中，不使用var声明的变量都会变成全局变量
```
```js
       function fun(){
           a=20;//相当于window.a=20;
       }
       fun();//必须写
       console.log(a);//20
```
```js
       var e=10;
       function fun(e){
           //var e;
           console.log(e);//undefined
       }
       fun();
       //定义形参相当于在函数作用域中声明了变量
```
```js
       var e=10;
       function fun(e){
           console.log(e);//undefined
           e=20;
       }
       fun();
       console.log(e);//10
```
## debug
## this
* 以函数的形式调用，this是window

* 以方法的形式调用，this是调用方法的那个对象